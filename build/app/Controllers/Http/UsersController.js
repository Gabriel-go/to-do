"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UsersController {
    async create({ request }) {
        const data = request.only(["nome", "senha", "email"]);
        const validator = await this.validateUser(data.email);
        if (validator.length == 0) {
            const user = await User_1.default.create(data);
            return user;
        }
        else
            return { 'Retorno': validator };
    }
    async index() {
        const user = await User_1.default.all();
        return user;
    }
    async show({ request }) {
        const parametos = request.params();
        const user = await User_1.default.find(parametos.id);
        return user;
    }
    async update({ request }) {
        const parametos = request.params();
        const user = await User_1.default.findOrFail(parametos.id);
        await user.merge(request.only(["nome", "senha", "email"]))
            .save();
        return user;
    }
    async destroy({ request }) {
        const parametos = request.params();
        const user = await User_1.default.findOrFail(parametos.id);
        await user.delete();
        return { Result: "ok" };
    }
    async validateUser(pEmail) {
        const user = await User_1.default
            .query()
            .where('email', pEmail);
        if (user.length > 0)
            return 'Usuario Ja cadastrado';
        else
            return '';
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map