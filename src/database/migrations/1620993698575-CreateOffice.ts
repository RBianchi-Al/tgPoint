import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOffice1620993698575 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "office",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "username_office",
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
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("office");
    }

}
