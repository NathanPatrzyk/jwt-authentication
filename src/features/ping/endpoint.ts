import { FastifyReply, FastifyRequest } from "fastify";

export function endpoint(_: FastifyRequest, reply: FastifyReply) {
  return reply.code(200).send({
    ping: "pong!",
  });
}
