"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name").notNull(),
    username: (0, pg_core_1.text)("username").notNull(),
    password: (0, pg_core_1.text)("password"),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow(),
}, (table) => ({
    usernameUnique: (0, pg_core_1.unique)("username_unique").on(table.username),
}));
