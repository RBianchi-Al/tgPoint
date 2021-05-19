import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1620960210919 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar",
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                    },
                    {
                        name: "dat_nasc",
                        type: "number",
                    },
                    {
                        name: "nis_pis",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "senha",
                        type: "varchar"
                    },
                    {
                        name: "dat_adm",
                        type: "number"
                    },
                    {
                        name: "dat_dem",
                        type: "number"
                    },
                    {
                        name: "company_id",
                        type: "uuid"
                    },
                    {
                        name: "office_id",
                        type: "varchar"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                      name: 'FKCompany',
                      referencedTableName: 'company',
                      referencedColumnNames: ['id'],
                      columnNames: ['company_id'],
                      onDelete: 'SET NULL',
                      onUpdate: 'SET NULL',
                    },
                    {
                        name: 'FKOffice',
                        referencedTableName: 'office',
                        referencedColumnNames: ['id'],
                        columnNames: ['office_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    }
                  ],
                
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
