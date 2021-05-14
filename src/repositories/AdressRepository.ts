import { EntityRepository, Repository } from "typeorm"
import { Address } from "../entities/Adress"


@EntityRepository(Address)
class AddressRepository extends Repository<Address>{

}
export {AddressRepository}