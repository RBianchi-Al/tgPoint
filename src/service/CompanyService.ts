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
    private companyRepository: CompanyRepository;
    constructor(){
        this.companyRepository = getCustomRepository(CompanyRepository)
    }

    async create({
        raz_social,
            cel,
            cnpj,
            email,
            id_admin,
            senha,
            cpf
    }:ICompanyCreate){
        
        const userAlreadyExists = await this.companyRepository.findOne({
            cnpj
        })

        if(userAlreadyExists){
            throw new Error("Company already exists!")
        }
        const company = this.companyRepository.create({
            raz_social,
            cel,
            cnpj,
            email,
            id_admin,
            senha,
            cpf
        });


        await this.companyRepository.save(company)

        return company; 
    }
    async listByCompany(){
        const listCompany = await this.companyRepository.find();
        return listCompany;
    }
}
export {CompanyService}