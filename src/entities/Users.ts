import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'
import { Company } from './Company';
import { Office } from './Office';

@Entity("users")

class Users {
    
    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    cpf: string;

    @Column()
    nis_pis: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    dat_adm: string;

    @Column()
    dat_dem: string;

    @Column()
    dat_nasc: string;

    @Column()
    company_id: string;

    @Column()
    office_id: string;

    @ManyToOne(() => Company)
    @JoinColumn({ name: 'company_id' })
    company: Company;

    @ManyToOne(() => Office)
    @JoinColumn({ name: 'office_id' })
    office: Office;

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

export {Users}