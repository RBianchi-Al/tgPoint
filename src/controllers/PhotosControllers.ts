import {Request, Response} from 'express'
import { PhotosService } from '../service/PhotosSErvice'


class PhotosControllers {
    async create(request: Request, response: Response){

        const {url,
            users_id} = request.body

        const photosServive = new PhotosService();

        const photos = await photosServive.create({
            url,
            users_id
        })

        return response.json(photos)
    }
}

export {PhotosControllers}