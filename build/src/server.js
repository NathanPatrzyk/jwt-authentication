"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_type_provider_zod_1 = require("fastify-type-provider-zod");
const cors_1 = __importDefault(require("@fastify/cors"));
const routes_js_1 = require("./routes.js");
const app = (0, fastify_1.default)().withTypeProvider();
app.setValidatorCompiler(fastify_type_provider_zod_1.validatorCompiler);
app.setSerializerCompiler(fastify_type_provider_zod_1.serializerCompiler);
app.register(cors_1.default, {
    origin: "*",
});
app.register(routes_js_1.router);
app
    .listen({
    port: 3333,
})
    .then(() => {
    console.log("Server is running on http://localhost:3333");
});
