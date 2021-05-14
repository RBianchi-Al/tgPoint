import {Request, Response} from 'express'
import { SettingsService } from '../service/SettingsService'

class SettingsController {

    async create(request: Request, response: Response){
        const {username, color} = request.body

        const settingsService = new SettingsService();
        
        try{
            const settings = await settingsService.create({color, username});
            return response.json(settings)
    
        }catch(err){
            return response.status(400).json({
                message: err.message,
            })
        }
        
    }
}

export {SettingsController}