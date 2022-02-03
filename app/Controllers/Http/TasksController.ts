import { HttpContext } from "@adonisjs/core/build/standalone";
import Task from "App/Models/Task";

export default class TasksController {
    public async create ({request}: HttpContext) {
        const data = request.only(["titulo","descricao","status","user_id","client_id"]);
        const task = await Task.create(data);        
        return task;
    }
    
    public async index() {
        const task = await Task.query().preload('user').preload('client');
        return task;
    }

    public async show({request}: HttpContext) {        
        const parametos = request.params();
        const task = await Task.query().where('id', parametos.id).preload('user');
        return task;        
    }

    public async update({request}: HttpContext) {    
        const parametos = request.params();
        const task = await Task.findOrFail(parametos.id)
        await task.merge(
                request.only(["titulo","descricao","status","user_id","client_id"])
            )
            .save();
        return task;        
    }

    public async destroy({request}: HttpContext) {        
        const parametos = request.params();
        const task = await Task.findOrFail(parametos.id);
        return await task.delete();                
    }
}
