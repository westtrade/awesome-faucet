import { and, asc, count, desc, eq, ilike, sql, type SQLWrapper } from 'drizzle-orm';
import type { PgDatabase, AnyPgTable } from 'drizzle-orm/pg-core';

interface ListParams {
	page?: number;
	pageSize?: number;
	sort?: string | string[]; // "name,-createdAt"
	search?: string;
	searchFields?: string[];
	query?: Record<string, any>; // фильтры вида { field: value }
}

interface PaginatedResult<T> {
	rows: T[];
	total: number;
	page: number;
	pageSize: number;
	totalPages: number;
}

export async function listDrizzle<
	TQueryResult = Record<string, unknown>,
	TFullSchema = unknown,
	TSchema = unknown,
	TTable extends AnyPgTable = AnyPgTable,
	TResult = any
>(
	db: PgDatabase<TQueryResult, TFullSchema, TSchema>,
	table: TTable,
	params: ListParams = {}
): Promise<PaginatedResult<TResult>> {
	const { page = 1, pageSize = 10, sort, search, searchFields = [], query = {} } = params;

	const offset = (page - 1) * pageSize;

	// WHERE
	const whereConditions: SQLWrapper[] = [];

	for (const [key, value] of Object.entries(query)) {
		const col = (table as any)[key];
		if (col && value !== undefined) {
			whereConditions.push(eq(col, value));
		}
	}

	if (search && searchFields.length > 0) {
		const searchConds = searchFields
			.map((field) => {
				const col = (table as any)[field];
				return col ? ilike(col, `%${search}%`) : null;
			})
			.filter(Boolean) as SQLWrapper[];

		if (searchConds.length > 0) {
			whereConditions.push(sql`${sql.join(searchConds, sql` OR `)}`);
		}
	}

	const whereClause = whereConditions.length > 0 ? and(...whereConditions) : undefined;

	// ORDER BY
	const orderClause = (Array.isArray(sort) ? sort : [sort])
		.filter(Boolean)
		.map((s) => {
			const isDesc = s.startsWith('-');
			const field = isDesc ? s.slice(1) : s;
			const col = (table as any)[field];
			return col ? (isDesc ? desc(col) : asc(col)) : null;
		})
		.filter(Boolean) as SQLWrapper[];

	// TOTAL COUNT
	const [{ count: total }] = await db.select({ count: count() }).from(table).where(whereClause);

	// SELECT rows
	const rows = await db
		.select()
		.from(table)
		.where(whereClause)
		.orderBy(...orderClause)
		.limit(pageSize)
		.offset(offset);

	return {
		rows,
		total: Number(total),
		page,
		pageSize,
		totalPages: Math.ceil(Number(total) / pageSize)
	};
}
