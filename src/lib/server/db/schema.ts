import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

// ── Tables ──────────────────────────────────────────────────────────

export const users = sqliteTable("users", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
});

export const rooms = sqliteTable("rooms", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	passphrase: text("passphrase").notNull(),
});

export const entries = sqliteTable("entries", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	title: text("title").notNull(),
	result: integer("result"),
	roomId: integer("room_id")
		.notNull()
		.references(() => rooms.id),
});

export const entryAnswers = sqliteTable("entry_answers", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	size: integer("size").notNull(),
	entryId: integer("entry_id")
		.notNull()
		.references(() => entries.id),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id),
});

export const roomUsers = sqliteTable("room_users", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	roomId: integer("room_id")
		.notNull()
		.references(() => rooms.id),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id),
});

// ── Relations ───────────────────────────────────────────────────────

export const usersRelations = relations(users, ({ many }) => ({
	roomUsers: many(roomUsers),
	entryAnswers: many(entryAnswers),
}));

export const roomsRelations = relations(rooms, ({ many }) => ({
	entries: many(entries),
	roomUsers: many(roomUsers),
}));

export const entriesRelations = relations(entries, ({ one, many }) => ({
	room: one(rooms, {
		fields: [entries.roomId],
		references: [rooms.id],
	}),
	entryAnswers: many(entryAnswers),
}));

export const entryAnswersRelations = relations(entryAnswers, ({ one }) => ({
	entry: one(entries, {
		fields: [entryAnswers.entryId],
		references: [entries.id],
	}),
	user: one(users, {
		fields: [entryAnswers.userId],
		references: [users.id],
	}),
}));

export const roomUsersRelations = relations(roomUsers, ({ one }) => ({
	room: one(rooms, {
		fields: [roomUsers.roomId],
		references: [rooms.id],
	}),
	user: one(users, {
		fields: [roomUsers.userId],
		references: [users.id],
	}),
}));
