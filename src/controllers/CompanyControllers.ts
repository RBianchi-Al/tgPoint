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

        try{
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
        }catch(err){
            return response.status(400).json({
                message: err.message
            })
        }
    }
}
export {CompanyControllers}