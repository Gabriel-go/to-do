"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Client"));
class ClientsController {
    async create({ request }) {
        const data = request.only(["nome"]);
        const client = await Client_1.default.create(data);
        return client;
    }
    async index() {
        const client = await Client_1.default.all();
        return client;
    }
    async show({ request }) {
        const parametos = request.params();
        const client = await Client_1.default.find(parametos.id);
        return client;
    }
    async update({ request }) {
        const parametos = request.params();
        const client = await Client_1.default.findOrFail(parametos.id);
        await client.merge(request.only(["nome"]))
            .save();
        return client;
    }
    async destroy({ request }) {
        const parametos = request.params();
        const client = await Client_1.default.findOrFail(parametos.id);
        return await client.delete();
    }
}
exports.default = ClientsController;
//# sourceMappingURL=ClientsController.js.map