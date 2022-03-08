import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateServiceDto {
    @MinLength(1)
    @IsNotEmpty()
    @IsString()
    name: string;
}