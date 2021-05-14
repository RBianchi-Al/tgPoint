import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePhotos1621014172140 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "photos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "url",
                        type: "varchar"
                    },
                    {
                        name: "users_id",
                        type: "uuid"
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
            await queryRunner.dropTable("photos")
    }

}
