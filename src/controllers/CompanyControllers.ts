import {Request, Response} from 'express'
import { CompanyService } from '../service/CompanyService'


class CompanyControllers {
    async create(request: Request, response: Response){
        const {cel,
            cnpj,
            email,
            id_admin,
            raz_social,
            senha,
        cpf } = request.body
        const companyService = new CompanyService();

        const company = await companyService.create({
            cel,
            cnpj,
            email,
            id_admin,
            raz_social,
            senha,
            cpf
        })
        return response.json(company)
    }

}
export {CompanyControllers}