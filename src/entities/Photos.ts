import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'
import { Users } from './Users';

@Entity("photos")
class Photos {
    
    @PrimaryColumn()
    id: string;

    @Column()
    url: string;

    @Column()
    users_id: string;

    @ManyToOne(() => Users)
    @JoinColumn({ name: 'users_id' })
    users: Users;

    @CreateDateColumn()
    created_at: Date; 

    @UpdateDateColumn()
    updated_at: Date;
    
    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Photos}