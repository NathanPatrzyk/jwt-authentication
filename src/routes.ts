import { z } from "zod";
import { UserController } from "./controller/UserController";

const userController = new UserController();

export const router = async (app, _opts) => {
  app.post(
    "/users",
    {
      schema: {
        body: z.object({
          name: z.string(),
          username: z.string(),
          password: z.string(),
        }),
      },
    },
    async (request) => {
      const { name, username, password } = request.body;
      const data = await userController.store({ name, username, password });

      return {
        user: data,
      };
    }
  );

  app.get("/users", async () => {
    const data = await userController.index();
    return {
      users: data,
    };
  });
};
