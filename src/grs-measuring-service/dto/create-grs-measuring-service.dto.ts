import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateGrsMeasuringServiceDto {
    date: Date;

    @MinLength(1)
    @IsNotEmpty()
    @IsString()
    name: string;

    @MinLength(1)
    @IsNotEmpty()
    @IsString()
    organizations: string;
}