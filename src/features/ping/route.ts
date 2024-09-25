import { endpoint } from "./endpoint.js";
import { RouteOptions } from "fastify";

const pingRoute: RouteOptions = {
  method: "GET",
  url: "/ping",
  handler: endpoint,
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          ping: {
            type: "string",
          },
        },
      },
    },
  },
};

export default pingRoute;
