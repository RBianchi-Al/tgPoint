import {Request, Response} from 'express'
import { PointService } from '../service/PointService'


class PointControllers {
    async create(request: Request, response: Response){
        const {
        date_entry,
        date_out,
        ip_adress,
        lunch_entry,
        users_id,
        lunch_out,
        date_creation,
        id,
        vacation
        } = request.body

        const pointService = new PointService();

        const point = await pointService.create({
        date_creation,
        date_entry,
        date_out,
        ip_adress,
        lunch_entry,
        users_id,
        lunch_out,
        id,
        vacation    
        });
        return response.json(point)
    }
    async deletePoint(request: Request, response: Response){
        const {id} = request.params
        const pointService = new PointService()
 
       

        try{
            const deletPoints = await pointService.deletePoint(id);
            return response.json(deletPoints)
           }catch(err){
               return response.status(400).json({
                   message: err.message,
               })
           }
    }
    async showByPoint(request: Request, response: Response){
        const pointService = new PointService();
        
        try{
            const listPoints = await pointService.listByPoint()
            return response.json(listPoints)
        }catch(err){
            return response.status(400).json({
                message: err.message,
        })
    }
        
    }

}

export {PointControllers}