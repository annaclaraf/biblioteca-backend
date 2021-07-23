import { EntityRepository, Repository } from "typeorm"
import { Obras } from "../entities/Obras"


@EntityRepository( Obras )
class ObrasRepository extends Repository<Obras>{}

export { ObrasRepository }