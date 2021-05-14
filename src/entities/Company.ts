import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'

@Entity("company")

class Company {
    
    @PrimaryColumn()
    id: string;

    @Column()
    raz_social: string;

    @Column()
    cnpj: string;

    @Column()
    cel: number;

    @Column()
    email: string;

    @Column()
    id_admin: string;

    @Column()
    senha: string;

    @Column()
    cpf: string;
    
    @CreateDateColumn()
    created_at: Date; 

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Company}