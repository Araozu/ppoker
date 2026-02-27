import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import type { entries } from "../db/schema";

export type Entry = InferSelectModel<typeof entries>;
export type NewEntry = InferInsertModel<typeof entries>;

export interface EntryRepository {
	findById(id: number): Promise<Entry | undefined>;
	findByRoomId(roomId: number): Promise<Entry[]>;
	create(entry: NewEntry): Promise<Entry>;
	update(id: number, entry: Partial<NewEntry>): Promise<Entry | undefined>;
	delete(id: number): Promise<void>;
}
