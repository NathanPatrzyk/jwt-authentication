import fastify from "fastify";
const app = fastify({
    logger: true,
});
app.get("/ping", (request, reply) => {
    return reply.code(200).send({
        ping: "pong!",
    });
});
try {
    await app.listen({
        port: 3333,
    });
}
catch (error) {
    console.log(error);
    process.exit(1);
}
