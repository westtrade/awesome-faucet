import { pgTable, integer, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	age: integer('age')
});

export const faucets = pgTable('faucets', {
	id: serial('id').primaryKey(),

	name: varchar('name', { length: 255 }).notNull(),
	url: varchar('url', { length: 512 }).notNull(),
	dailyLimit: varchar('daily_limit', { length: 128 }), // e.g. "1000 TON"
	claimIntervalMinutes: integer('claim_interval_minutes'),

	supportedCryptos: text('supported_cryptos').notNull(), // comma-separated: "TON,ETH,BTC"

	isActive: integer('is_active').default(1), // 1 = active, 0 = inactive
	rating: integer('rating').default(0), // optional: for manual curation
	createdAt: timestamp('created_at', { mode: 'date' }).defaultNow()
});

export const faucetSubmissions = pgTable('faucet_submissions', {
	id: serial('id').primaryKey(),

	name: varchar('name', { length: 255 }).notNull(),
	url: varchar('url', { length: 512 }).notNull(),
	dailyLimit: varchar('daily_limit', { length: 128 }),
	claimIntervalMinutes: integer('claim_interval_minutes'),
	supportedCryptos: text('supported_cryptos').notNull(),

	reviewed: integer('reviewed').default(0), // 0 = new, 1 = reviewed
	createdAt: timestamp('created_at', { mode: 'date' }).defaultNow()
});
