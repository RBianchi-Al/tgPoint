import { EntityRepository, Repository } from "typeorm"
import { Photos } from "../entities/Photos"


@EntityRepository(Photos)
class PhotosRepository extends Repository<Photos>{

}
export {PhotosRepository}