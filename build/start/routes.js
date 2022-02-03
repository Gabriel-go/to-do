"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.resource('user', 'UsersController')
    .except(['store', 'edit']);
Route_1.default.resource('client', 'ClientsController')
    .except(['store', 'edit']);
Route_1.default.resource('task', 'TasksController')
    .except(['store', 'edit']);
Route_1.default
    .group(() => {
    Route_1.default.get('/login', "LoginController.login");
});
//# sourceMappingURL=routes.js.map