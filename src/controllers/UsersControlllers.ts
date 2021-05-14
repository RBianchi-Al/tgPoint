import {Request, Response} from 'express'
import { UsersService } from '../service/UsersService'



class UsersControllers {

    async create(request: Request, response: Response){
        const {cpf,
            dat_adm,
            dat_dem,
            dat_nasc,
            email,
            nis_pis,
            senha,
            username,
            company_id,
            office_id,} = request.body
        const usersService = new UsersService()

        const users = await usersService.create({
            cpf,
            dat_adm,
            dat_dem,
            dat_nasc,
            email,
            nis_pis,
            senha,
            username,
            company_id,
            office_id,
        })
        return response.json(users)
    }

}
export {UsersControllers}