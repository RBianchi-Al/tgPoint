import {Request, Response} from 'express'
import { PhotosService } from '../service/PhotosService'


class PhotosControllers {
    async create(request: Request, response: Response){

        const {url,
            users_id} = request.body

        const photosServive = new PhotosService();

        try{
            const photos = await photosServive.create({
                url,
                users_id
            })
            return response.json(photos)
        }catch(err){
            return response.status(400).json({
                message: err.message,
            })
        }
    }
    async deletePhotos(request: Request, response: Response){
        const {id} = request.params
        const photosService = new PhotosService;

        try{
            const deletePhoto = await photosService.detelePhotos(id);
            return response.json(deletePhoto)
        }catch(err){
            return response.status(400).json({
                message: err.message,
            });
        }
    }
    async showByPhotos(request: Request, response: Response){
        const photosService = new PhotosService;
        
        try{
            const listPhotos = await photosService.listByPhotos()
            return response.json(listPhotos)
        }catch(err){
            return response.status(400).json({
                message: err.message,
            });
        }
        
    }  

}

export {PhotosControllers}