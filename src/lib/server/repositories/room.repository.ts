import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import type { rooms } from "../db/schema";

export type Room = InferSelectModel<typeof rooms>;
export type NewRoom = InferInsertModel<typeof rooms>;

export interface RoomRepository {
	findById(id: number): Promise<Room | undefined>;
	findAll(): Promise<Room[]>;
	create(room: NewRoom): Promise<Room>;
	update(id: number, room: Partial<NewRoom>): Promise<Room | undefined>;
	delete(id: number): Promise<void>;
}
