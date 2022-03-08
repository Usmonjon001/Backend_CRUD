import { IsNotEmpty, IsString, MinLength } from "class-validator";


export class CreateCompressionCoefficientDto {
    @MinLength(1)
    @IsNotEmpty()
    @IsString()
    name: string;
}
