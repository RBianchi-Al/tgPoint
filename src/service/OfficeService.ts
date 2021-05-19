import { getCustomRepository } from "typeorm"
import { OfficeRepository } from "../repositories/OfficeRepository"

interface IOfficeCreate {
    username_office: string;
}

class OfficeService {
    private officeRepository : OfficeRepository;
    constructor(){
        this.officeRepository = getCustomRepository(OfficeRepository)
       

    }

    async create({username_office}: IOfficeCreate){
         
        const office = this.officeRepository.create({
            username_office
        });
        await this.officeRepository.save(office);
        return office;
        
    }
    async listByOffice(){
        const listOffice = await this.officeRepository.find({});
        return listOffice;
    }
}
export {OfficeService}