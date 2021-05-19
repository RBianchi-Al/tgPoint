import { getCustomRepository } from "typeorm"
import { AddressRepository } from "../repositories/AdressRepository"

interface IAdressCreate{
    city: string;
    district: string;
    number: number;
    road: string;
    state: string;
    users_id: string;
    cep: string;
    company_id: string;
}


class AdressService{
    private adressRepository: AddressRepository;
    constructor(){
        this.adressRepository = getCustomRepository(AddressRepository);
    }

    async create({city,
        district,
        number,
        road,
        state,
        users_id,
        company_id, 
        cep}:IAdressCreate){
        
        
        const adress = this.adressRepository.create({
            city,
            district,
            road,
            state,
            users_id,
            number, 
            company_id,
            cep

        });

        await this.adressRepository.save(adress)
        return adress; 
   
    }
    async listByAdress(){
        const listAdress = await this.adressRepository.find()
        return listAdress;
    }
}

export {AdressService}