import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

interface IUserCreate{
    username: string;
    cpf: string;
    nis_pis: string;
    email: string;
    dat_adm: string;
    dat_dem: string;
    dat_nasc: string;
    senha: string;
    company_id: string;
    office_id: string;
    
}


class UsersService {

    async create({cpf, dat_adm, dat_dem,dat_nasc,email,nis_pis,senha,username, company_id,
        office_id}: IUserCreate){
        const usersRepository = getCustomRepository(UsersRepository)

        const userAlreadyExists = await usersRepository.findOne({
            cpf
        })

        if(userAlreadyExists){
            throw new Error("User already exists!")
        }
        
       
        const users =  usersRepository.create({
            username,
            cpf,
            nis_pis,
            email,
            dat_adm,
            dat_dem,
            dat_nasc,
            senha,
            company_id,
            office_id,

        });
        await usersRepository.save(users);

        return users;
    }
}
export {UsersService}