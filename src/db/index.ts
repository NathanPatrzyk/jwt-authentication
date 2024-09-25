import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema.js";

export const client = postgres(
  "postgresql://docker:docker@localhost:5432/jwt-authentication"
);
export const db = drizzle(client, { schema, logger: true });
