import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
import { router } from "./routes.js"

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, {
  origin: "*",
});

app.register(router)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running on http://localhost:3333");
  });