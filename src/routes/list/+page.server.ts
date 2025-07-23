import { db } from '$lib/server/db';
import { faucets } from '$lib/server/db/schema';
import { listDrizzle } from '$lib/server/listDrizzle';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const page = parseInt(url.searchParams.get('page') || '1');
	const paginatedFaucets = await listDrizzle(db, faucets, {
		page,
		pageSize: 10
	});

	return {
		faucets: paginatedFaucets
	};
};
