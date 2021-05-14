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
        date_creation
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
        });
        return response.json(point)
    }

}

export {PointControllers}