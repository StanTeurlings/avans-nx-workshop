import { 
    IsNotEmpty, 
    IsString, 
    IsOptional, 
    IsDate, 
    IsEnum, 
    IsUrl 
} from "class-validator";
import { 
    ICreateAdopter, 
    IUpdateAdopter, 
    IUpsertAdopter, 
    AdopterGender 
} from "@avans-nx-workshop/shared/api";

export class CreateAdopterDto implements ICreateAdopter {
    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @IsString()
    @IsNotEmpty()
    emailAddress!: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber!: string;

    @IsDate()
    @IsNotEmpty()
    birthDate!: Date;
}

export class UpdateAdopterDto implements IUpdateAdopter {
    @IsString()
    @IsOptional()
    firstName?: string;

    @IsString()
    @IsOptional()
    lastName?: string;

    @IsString()
    @IsOptional()
    emailAddress?: string;

    @IsString()
    @IsOptional()
    phoneNumber?: string;

    @IsDate()
    @IsOptional()
    birthDate?: Date;

    @IsUrl()
    @IsOptional()
    profileImgUrl = '';

    @IsEnum(AdopterGender)
    @IsOptional()
    gender?: AdopterGender;
}

export class UpsertAdopterDto implements IUpsertAdopter {
    _id!: string;

    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @IsString()
    @IsNotEmpty()
    emailAddress!: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber!: string;

    @IsDate()
    @IsNotEmpty()
    birthDate!: Date;

    @IsString()
    @IsOptional()
    profileImgUrl = '';

    @IsEnum(AdopterGender)
    @IsOptional()
    gender: AdopterGender = AdopterGender.Unknown;
}
