import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'
import { Company } from './Company';
import { Users } from './Users';

@Entity("address")
class Address {
    
    @PrimaryColumn()
    id: string;

    @Column()
    road: string;

    @Column()
    district: string;

    @Column()
    number: number;

    @Column()
    city: string;

    @Column()
    cep: string;

    @Column()
    users_id: string;

    @Column()
    company_id: string;

    @ManyToOne(() => Users)
    @JoinColumn({ name: 'users_id' })
    users: Users;

    @ManyToOne(() => Company)
    @JoinColumn({ name: 'company_id' })
    company: Company;

    @Column()
    state: string;

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

export {Address}