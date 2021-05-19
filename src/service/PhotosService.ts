import { getCustomRepository } from "typeorm"
import { PhotosRepository } from "../repositories/PhotosRepository"

interface IPhotosCreate{
    url: string;
    users_id: string;

}

class PhotosService{
    private photosRepository : PhotosRepository;
    constructor() {
        this.photosRepository = getCustomRepository(PhotosRepository)
    }

    async create({url,
        users_id}:IPhotosCreate){
        
    
        const photos = this.photosRepository.create({
            url,
            users_id
        });
        await this.photosRepository.save(photos)
        return photos; 
    
    }
    async detelePhotos(id:string){
        const photosRepository = await this.photosRepository.find({
            where: {id}
        });
        return photosRepository;
    }
    async listByPhotos(){
        const listPhotos = await this.photosRepository.find({});
        return listPhotos;
    }
}

export {PhotosService}