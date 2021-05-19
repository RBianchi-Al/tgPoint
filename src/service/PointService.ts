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
            id: string;
            vacation: string;
}

class PointService{
    private pointRepository: PointRepository
    constructor(){
        this.pointRepository = getCustomRepository(PointRepository);
    }

    async create({date_creation,
        date_entry,
        vacation,
        date_out,
        ip_adress,
        lunch_entry,
        users_id,
        lunch_out,
        id}:IPointCreate){
     
   

        const point = this.pointRepository.create({
            ip_adress,
            users_id,
            lunch_entry,
            date_creation,
            date_entry,
            date_out,
            lunch_out,
            id,
            vacation
        })
        await this.pointRepository.save(point);
        return point;
    }
    async deletePoint(id: string){
        const pointRepository = await this.pointRepository.find({
            where: { id } 
        });       
        return pointRepository;
    }
    async listByPoint(){
        const listPoint = await this.pointRepository.find({});
        return listPoint;
    }
}

export {PointService}