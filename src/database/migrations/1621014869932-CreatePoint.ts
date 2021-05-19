import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePoint1621014869932 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "point",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "date_entry",
                        type: 'timestamp',
                                              
                    },
                    {
                        name: "lunch_out",
                        type: 'timestamp',
                                         
                    },
                    {
                        name: "lunch_entry",
                        type: 'timestamp',
                                         
                    },
                    {
                        name: "date_out",
                        type: 'timestamp',
                                        
                    },
                    {
                        name: "date_creation",
                        type: 'timestamp',
                                      
                    },
                    {
                        name: "ip_adress",
                        type: 'varchar',
                                              
                    },
                    {
                        name: "users_id",
                        type: 'uuid',
                                              
                    },
                    {
                        name: "vacation",
                        type: "timestamp",
                       
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
        await queryRunner.dropTable("point")
    }

}
