import { getCustomRepository } from "typeorm"
import { CompanyRepository } from "../repositories/CompanyRepository"

interface ICompanyCreate {
    raz_social: string;
    cel: number;
    cnpj: string;
    email: string;
    id_admin?: string;
    senha: string;
    cpf: string;

}

class CompanyService {

    async create({
        raz_social,
            cel,
            cnpj,
            email,
            id_admin,
            senha,
            cpf
    }:ICompanyCreate){
        const companyRepository = getCustomRepository(CompanyRepository)
        
        const userAlreadyExists = await companyRepository.findOne({
            cnpj
        })

        if(userAlreadyExists){
            throw new Error("Company already exists!")
        }
        const company = companyRepository.create({
            raz_social,
            cel,
            cnpj,
            email,
            id_admin,
            senha,
            cpf
        });


        await companyRepository.save(company)

        return company; 
    }
}
export {CompanyService}