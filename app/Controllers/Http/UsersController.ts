import { HttpContext } from "@adonisjs/core/build/standalone";
import { StrictValues } from "@ioc:Adonis/Lucid/Database";
import User from "App/Models/User";

export default class UsersController {
 
    // INICIO CRUD BASICO
    public async create ({request}: HttpContext) {
        const data = request.only(["nome", "senha","email"]);
        const validator = await this.validateUser(data.email);
        
        if (validator.length == 0){        
            const user = await User.create(data);        
            return user;
        }else 
            return {'Retorno': validator} 
    }

    public async index() {
        const user = await User.all();
        return user;        
    }

    public async show({request}: HttpContext) {        
        const parametos = request.params();
        const user = await User.find(parametos.id);
        return user;        
    }

    public async update({request}: HttpContext) {    
        const parametos = request.params();
        const user = await User.findOrFail(parametos.id)
        await user.merge(
                request.only(["nome", "senha","email"]),
            )
            .save();
        return user;        
    }

    public async destroy({request}: HttpContext) {        
        const parametos = request.params();
        const user = await User.findOrFail(parametos.id);
        await user.delete();
        return {Result:"ok"};       
                
    }
    //FIM CRUD BASICO
    
    private async validateUser(pEmail: StrictValues) {
        const user = await User
        .query()
        .where('email', pEmail);
        if(user.length>0) 
        return  'Usuario Ja cadastrado' 
        else 
        return  '';
        
    }
}