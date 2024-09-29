"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drizzle_kit_1 = require("drizzle-kit");
exports.default = (0, drizzle_kit_1.defineConfig)({
    schema: "./src/db/schema.ts",
    out: "./.migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://docker:docker@localhost:5432/jwt-authentication",
    },
});
