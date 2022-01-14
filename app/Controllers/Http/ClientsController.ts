import { HttpContext } from "@adonisjs/core/build/standalone";
import Client from "App/Models/Client";

export default class ClientsController {

    public async create ({request}: HttpContext) {
        const data = request.only(["nome"]);
        const client = await Client.create(data);        
        return client;
    }

    public async index() {
        const client = await Client.all();
        return client;        
    }

    public async show({request}: HttpContext) {        
        const parametos = request.params();
        const client = await Client.find(parametos.id);
        return client;        
    }

    public async update({request}: HttpContext) {    
        const parametos = request.params();
        const client = await Client.findOrFail(parametos.id)
        await client.merge(
                request.only(["nome"]),
            )
            .save();
        return client;        
    }

    public async destroy({request}: HttpContext) {        
        const parametos = request.params();
        const client = await Client.findOrFail(parametos.id);
        return await client.delete();
                
    }
}
