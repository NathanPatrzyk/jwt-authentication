"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const router = async (app, _opts) => {
    app.get("/", async (request, reply) => {
        reply
            .code(200)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({ hello: "world" });
    });
};
exports.router = router;
