import fastify from "fastify";
import pingRoute from "./features/ping/route.js";

const app = fastify({
  logger: true,
});

app.route(pingRoute);

try {
  await app.listen({
    port: 3333,
  });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
