import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateMinistryDto {
    @MinLength(1)
    @IsNotEmpty()
    @IsString()
    name: string;
}