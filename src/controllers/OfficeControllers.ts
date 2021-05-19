import {Request, Response} from 'express'
import { OfficeService } from '../service/OfficeService'


class OfficeControllers {
    async create(request: Request, response: Response){
        const {username_office} = request.body
        const officeService = new OfficeService();

        const office = await officeService.create({
            username_office
        });

        return response.json(office);
    }
    async showByOffice(request: Request, response: Response){
        const officeService = new OfficeService();
        try{
            const listOffice = await officeService.listByOffice()
            return response.json(listOffice) 
        }catch(err){
            return response.status(400).json({
                message: err.message,
            });
        }
        
    }
    

}
export {OfficeControllers}