import bcrypt from "bcryptjs";
import { db } from "../db/index.js";
import { users } from "../db/schema.js";
import { eq } from "drizzle-orm";
import { error } from "console";

interface UserRequest {
  name: string;
  username: string;
  password: string;
}

export class UserController {
  async index() {
    const data = db
      .select({
        id: users.id,
        name: users.name,
        username: users.username,
        password: users.password,
      })
      .from(users);

    return data;
  }

  async store({ name, username, password }: UserRequest) {
    const userExists = await db
      .select({
        id: users.id,
        name: users.name,
        username: users.username,
        password: users.password,
      })
      .from(users)
      .where(eq(users.username, username))
      .limit(1);

    if (userExists) {
      return {
        error: "User exists",
      };
    }

    const hashPassword = await bcrypt.hash(password, 8);

    const data = await db
      .insert(users)
      .values({
        name,
        username,
        password: hashPassword,
      })
      .returning();

    return data[0];
  }
}
