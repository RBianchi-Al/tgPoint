import { getCustomRepository } from "typeorm"
import { PhotosRepository } from "../repositories/PhotosRepository"

interface IPhotosCreate{
    url: string;
    users_id: string;

}

class PhotosService{

    async create({url,
        users_id}:IPhotosCreate){
        const photosRepository = getCustomRepository(PhotosRepository)
    
        const photos = photosRepository.create({
            url,
            users_id
        });
        await photosRepository.save(photos)
        return photos; 
    
    }
}

export {PhotosService}