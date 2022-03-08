import { IsNotEmpty, IsString, MinLength } from "class-validator";



export class CreateRankDto {
    @MinLength(1)
    @IsNotEmpty()
    @IsString()
    name: string;
}
