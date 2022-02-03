"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Task"));
class TasksController {
    async create({ request }) {
        const data = request.only(["titulo", "descricao", "status", "user_id", "client_id"]);
        const task = await Task_1.default.create(data);
        return task;
    }
    async index() {
        const task = await Task_1.default.query().preload('user').preload('client');
        return task;
    }
    async show({ request }) {
        const parametos = request.params();
        const task = await Task_1.default.query().where('id', parametos.id).preload('user');
        return task;
    }
    async update({ request }) {
        const parametos = request.params();
        const task = await Task_1.default.findOrFail(parametos.id);
        await task.merge(request.only(["titulo", "descricao", "status", "user_id", "client_id"]))
            .save();
        return task;
    }
    async destroy({ request }) {
        const parametos = request.params();
        const task = await Task_1.default.findOrFail(parametos.id);
        return await task.delete();
    }
}
exports.default = TasksController;
//# sourceMappingURL=TasksController.js.map