import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateSectionDto {
    @MinLength(1)
    @IsNotEmpty()
    @IsString()
    name: string;
}

