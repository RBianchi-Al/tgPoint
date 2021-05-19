import {Request, Response} from 'express'

import { SettingsService } from '../service/SettingsService'

class SettingsController {

    async create(request: Request, response: Response){
        const {username, color, id} = request.body

        const settingsService = new SettingsService();
        
        try{
            const settings = await settingsService.create({color, username, id});
            
            return response.json(settings)

        }catch(err){
            return response.status(400).json({
                message: err.message,
            })
        }
        
    }
    async showBySettings (request: Request, response: Response):Promise<Response>{
        
        const settingsService = new SettingsService();
        
        try{
            const colorsShow = await settingsService.listBySettings();
            return response.json(colorsShow)
        }catch(err){
            return response.status(400).json({
                message: err.message,

        })

    }
}
}

export {SettingsController}