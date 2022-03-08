import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateDirectionDto {
    @MinLength(1)
    @IsNotEmpty()
    @IsString()
    name: string;
}
