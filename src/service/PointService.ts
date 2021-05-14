import { getCustomRepository } from "typeorm"
import { PointRepository } from "../repositories/PointRepository"


interface IPointCreate{
            date_creation: string;
            date_entry: string;
            date_out: string;
            ip_adress: string;
            lunch_entry: string;
            users_id: string;
            lunch_out: string;
}

class PointService{

    async create({date_creation,
        date_entry,
        date_out,
        ip_adress,
        lunch_entry,
        users_id,
        lunch_out}:IPointCreate){
        const pointRepository = getCustomRepository(PointRepository)
   

        const point = pointRepository.create({
            ip_adress,
            users_id,
            lunch_entry,
            date_creation,
            date_entry,
            date_out,
            lunch_out

        })
        await pointRepository.save(point);
        return point;
    }
}

export {PointService}