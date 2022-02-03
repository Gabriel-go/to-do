"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class LoginController {
    async login({ request }) {
        const data = request.only(["email", "senha"]);
        const user = await User_1.default
            .query()
            .where('email', data.email)
            .where('senha', data.senha);
        if (user.length == 0) {
            return { retorno: "Usuario não encontrado" };
        }
        else
            return user;
    }
}
exports.default = LoginController;
//# sourceMappingURL=LoginController.js.map