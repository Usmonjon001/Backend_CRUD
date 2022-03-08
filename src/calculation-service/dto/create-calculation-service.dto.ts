import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";


export class CreateCalculationServiceDto {
    @MinLength(1)
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    fixed_price: number;
}

