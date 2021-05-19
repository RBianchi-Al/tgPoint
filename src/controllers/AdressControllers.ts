import {Request, Response} from 'express'
import { AdressService } from '../service/AdressService'


class AdressControllers {
    async create(request: Request, response: Response){

        const {city,
            district,
            road,
            state,
            users_id,
            number,
            company_id, 
            cep} = request.body

        const adressService = new AdressService();

        const adress = await adressService.create({
            city,
            district,
            road,
            state,
            users_id,
            number,
            company_id,
            cep
        });

        return response.json(adress);
        
    }
    async showByAdress(request: Request, response: Response){
        const adressService = new AdressService();

        try{
            const listAdress = await adressService.listByAdress()
            return response.json(listAdress)
        }catch(err){
            return response.status(400).json({
                message: err.message,
            });
        }
    }
}

export {AdressControllers}