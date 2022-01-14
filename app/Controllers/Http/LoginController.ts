import { HttpContext } from "@adonisjs/core/build/standalone";
import User from "App/Models/User";

export default class LoginController {
     //VALIDAÇÃO LOGIN
    public async login ({request}: HttpContext) { 
        const data = request.only(["email", "senha"]);          
        const user = await User
        .query()
        .where('email', data.email)
        .where('senha',data.senha);

        if (user.length == 0){
            return {retorno : "Usuario não encontrado"}
        }else
            return user;
    }
}