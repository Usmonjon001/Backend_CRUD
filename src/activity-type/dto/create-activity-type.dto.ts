import { IsBoolean, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateActivityTypeDto {
    @MinLength(1)
    @IsNotEmpty()
    @IsString()
    activity_type_account: string;
    @IsBoolean()
    swot_type: boolean;
    @MinLength(1)
    @IsNotEmpty()
    @IsString()
    name: string;
}
