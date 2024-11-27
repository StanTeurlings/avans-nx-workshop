import { IsNotEmpty, IsString, IsBoolean, IsOptional, IsDate, isString } from 'class-validator';
import {
    // ICreateAdopter,
    IUpdateAdopter,
    IUpsertAdopter,
    IAdopterRegistration,
    Id,
    AdopterGender
} from '@avans-nx-workshop/shared/api';

export class CreateAdopterDto implements IAdopterRegistration {
    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsString()
    @IsNotEmpty()
    emailAddress!: string;

    @IsString()
    @IsNotEmpty()
    lastName!: string;
}

export class UpsertAdopterDto implements IUpsertAdopter {
    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @IsString()
    @IsNotEmpty()
    address!: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber!: string;

    @IsDate()
    @IsNotEmpty()
    birthDate!: Date;

    @IsString()
    token?: string | undefined;

    @IsString()
    @IsNotEmpty()
    _id!: Id;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsString()
    @IsNotEmpty()
    emailAddress!: string;

    @IsString()
    @IsNotEmpty()
    profileImgUrl = '';

    @IsString()
    @IsNotEmpty()
    gender: AdopterGender = AdopterGender.Unknown;
}

export class UpdateAdopterDto implements IUpdateAdopter {
    _id?: string | undefined;

    @IsString()
    @IsOptional()
    firstName!: string;
}
