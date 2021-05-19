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
            office_id,id} = request.body
        const usersService = new UsersService()

       try{
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
            id
        })
        return response.json(users)
       }catch(err){
           return response.status(400).json({
               message: err.message,
           })
       }
    }
    async deleteUser(request: Request, response: Response){
        const {id} = request.params
        const usersService = new UsersService()
 
       

        try{
            const deletUsers = await usersService.deleteUser(id);
            return response.json(deletUsers)
           }catch(err){
               return response.status(400).json({
                   message: err.message,
               })
           }

    }

}
export {UsersControllers}