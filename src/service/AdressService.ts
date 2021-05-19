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
}


class AdressService{

    async create({city,
        district,
        number,
        road,
        state,
        users_id, cep}:IAdressCreate){
        const adressRepository = getCustomRepository(AddressRepository)
        
        const adress = adressRepository.create({
            city,
            district,
            road,
            state,
            users_id,
            number, 
            cep

        });

        await adressRepository.save(adress)
        return adress; 
   
    }
}

export {AdressService}