import { pgTable, serial, text, timestamp, unique } from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    username: text("username").notNull(),
    password: text("password").notNull(),

    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    usernameUnique: unique("username_unique").on(table.username),
  })
);
