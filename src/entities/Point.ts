import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'
import { Users } from './Users';

@Entity("point")
class Point {
    
    @PrimaryColumn()
    id: string;

    @PrimaryColumn()
    ip_adress: string;

    @PrimaryColumn()
    vacation: string;

    @CreateDateColumn()
    date_entry: Date; 

    @CreateDateColumn()
    lunch_out: Date; 

    @CreateDateColumn()
    lunch_entry: Date; 

    @CreateDateColumn()
    date_out: Date; 

    @CreateDateColumn()
    date_creation: Date; 

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

export {Point}