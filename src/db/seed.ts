import { client, db } from "./index.js";
import { users } from "./schema.js";

async function seed() {
  await db.delete(users);

  await db
    .insert(users)
    .values([{ name: "John Doe", username: "john.doe", password: "segredo" }]);
}

seed().finally(() => {
  client.end();
});
