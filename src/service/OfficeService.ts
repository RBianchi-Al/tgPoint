import { getCustomRepository } from "typeorm"
import { OfficeRepository } from "../repositories/OfficeRepository"

interface IOfficeCreate {
    username_office: string;
}

class OfficeService {

    async create({username_office}: IOfficeCreate){
        const officeRepository = getCustomRepository(OfficeRepository)
        
        const office = officeRepository.create({
            username_office
        });
        await officeRepository.save(office);
        return office;
        
    }
}
export {OfficeService}