import { Entity, PrimaryColumn, Column } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("obras")
class Obras {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    titulo: string;

    @Column()
    editora: string;

    @Column()
    foto: string;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { Obras }