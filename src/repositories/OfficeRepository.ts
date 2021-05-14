import { EntityRepository, Repository } from "typeorm"
import { Office } from "../entities/Office"

@EntityRepository(Office)
class OfficeRepository extends Repository<Office>{

}
export {OfficeRepository}