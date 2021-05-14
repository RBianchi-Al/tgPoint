import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'

@Entity("office")

class Office {
    
    @PrimaryColumn()
    id: string;

    @Column()
    username_office: string;

    @UpdateDateColumn()
    updated_at: Date;
    
    @CreateDateColumn()
    created_at: Date; 

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Office}