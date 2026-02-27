import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import type { users } from "../db/schema";

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

export interface UserRepository {
	findById(id: number): Promise<User | undefined>;
	findAll(): Promise<User[]>;
	create(user: NewUser): Promise<User>;
	update(id: number, user: Partial<NewUser>): Promise<User | undefined>;
	delete(id: number): Promise<void>;
}
