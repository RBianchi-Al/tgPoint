import {Request, Response} from 'express'
import { AdressService } from '../service/AdressService'


class AdressControllers {
    async create(request: Request, response: Response){

        const {city,
            district,
            road,
            state,
            users_id,
            number} = request.body

        const adressService = new AdressService();

        const adress = await adressService.create({
            city,
            district,
            road,
            state,
            users_id,
            number
        });

        return response.json(adress);
        
    }
}

export {AdressControllers}