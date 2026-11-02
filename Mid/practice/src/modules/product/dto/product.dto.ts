import { Optional } from "@nestjs/common/decorators/core/optional.decorator";
import { IsNotEmpty } from "class-validator";

export class createProductDto {
    @IsNotEmpty()
    name: string = "";
    @IsNotEmpty()
    category: string = "";
    @IsNotEmpty()
    price!: number;
    @IsNotEmpty()
    quantity!: number;
}
export class updateProductDto {
    @Optional()
    name: string = "";
    @Optional()
    category: string = "";
    @Optional()
    price: number = 0;
    @Optional()
    quantity: number = 0;
}