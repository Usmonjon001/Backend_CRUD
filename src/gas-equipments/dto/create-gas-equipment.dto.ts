import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateGasEquipmentDto {
    @MinLength(1)
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    consumption: number
}