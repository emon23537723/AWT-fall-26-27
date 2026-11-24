"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable1795536322000 = void 0;
const typeorm_1 = require("typeorm");
class CreateTable1795536322000 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_V4()",
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "email",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "password",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "age",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "phone",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "accounttype",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "address",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP(6)",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP(6)",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.CreateTable1795536322000 = CreateTable1795536322000;
//# sourceMappingURL=1795536322000-createUserTable.js.map