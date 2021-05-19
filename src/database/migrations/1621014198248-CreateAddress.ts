import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAddress1621014198248 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "address",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "road",
                        type: "varchar",
                        
                    },
                    {
                        name: "district",
                        type: "varchar",
                        
                    },
                    {
                        name: "number",
                        type: "varchar",
                        
                    },
                    {
                        name: "city",
                        type: "varchar",
                        
                    },
                    {
                        name: "state",
                        type: "varchar",
                        
                    },
                    {
                        name: "cep",
                        type: "varchar"
                    },
                    {
                        name: "users_id",
                        type: "uuid",

                    },
                    {
                        name: "company_id",
                        type: "uuid",

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
                      name: 'FKUsers',
                      referencedTableName: 'users',
                      referencedColumnNames: ['id'],
                      columnNames: ['users_id'],
                      onDelete: 'SET NULL',
                      onUpdate: 'SET NULL',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("address")
    }

}