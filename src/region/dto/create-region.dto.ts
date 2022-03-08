import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator";


export class CreateRegionDto {
    @IsNotEmpty()
    @IsBoolean()
    change: boolean;

    @MinLength(1)
    @IsNotEmpty()
    @IsString()
    name: string;
}
