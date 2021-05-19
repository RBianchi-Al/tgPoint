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
    id: string;
}


class UsersService {
    private usersRepository : UsersRepository;

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    async create({cpf, dat_adm, dat_dem,dat_nasc,email,nis_pis,senha,username, company_id,
        office_id, id}: IUserCreate){
        
        const userAlreadyExists = await this.usersRepository.findOne({
            cpf
        })
        
        if(userAlreadyExists){
            throw new Error("User already exists!")
        }
        

       
        const users =  this.usersRepository.create({
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
            id

        });
        await this.usersRepository.save(users);

        return users;
    }
    async deleteUser(id: string){
        const usersRepository = await this.usersRepository.find({
            where: { id } 
        });       
        return usersRepository;
    }
    async listByUser(){
        const list = await this.usersRepository.find({})
        return list;
    }
}
export {UsersService}