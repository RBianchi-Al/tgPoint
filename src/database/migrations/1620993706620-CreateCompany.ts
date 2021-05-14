import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompany1620993706620 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "company",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: "raz_social",
                        type: "varchar",
                    },
                    {
                        name: "cnpj",
                        type: "varchar",
                    },
                    {
                        name: "cel",
                        type: "number",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "id_admin",
                        type: "varchar",
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                    },
                    {
                        name: "senha",
                        type: "varchar",

                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("company")
    }

}
