"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./index.js");
const schema_js_1 = require("./schema.js");
async function seed() {
    await index_js_1.db.delete(schema_js_1.users);
    await index_js_1.db
        .insert(schema_js_1.users)
        .values([{ name: "John Doe", username: "john.doe", password: "segredo" }]);
}
seed().finally(() => {
    index_js_1.client.end();
});
