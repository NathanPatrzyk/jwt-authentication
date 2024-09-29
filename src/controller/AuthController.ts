import bcrypt from "bcryptjs";
import { db } from "../db/index.js";
import { users } from "../db/schema.js";
import { eq } from "drizzle-orm";
import { sign } from "jsonwebtoken";
import { env } from "process";

interface AuthRequest {
  username: string;
  password: string;
}

export class AuthController {
  async authenticate({ username, password }: AuthRequest) {
    const data = await db
      .select()
      .from(users)
      .where(eq(users.username, username));

    if (!data[0]) {
      return { error: "User not found" };
    }

    const isValuePassword = await bcrypt.compare(password, data[0].password);

    if (!isValuePassword) {
      return { error: "Password invalid" };
    }

    const token = sign({ id: data[0].id }, env.SECRET, { expiresIn: "1d" });

    return [data[0], token];
  }
}
