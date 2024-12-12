import { IsNotEmpty, IsString, IsBoolean, IsOptional, IsDate, isString } from 'class-validator';
import {
    // ICreateuser,
    IUpdateuser,
    IUpsertuser,
    IUserRegistration,
    Id,
    userGender,
    userRole
} from '@avans-nx-workshop/shared/api';

export class CreateuserDto implements IUserRegistration {
    @IsString()
    @IsNotEmpty()
    name!: string;

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

export class UpsertuserDto implements IUpsertuser {
    @IsString()
    @IsNotEmpty()
    name!: string;

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
    gender: userGender = userGender.Unknown;

    @IsString()
    @IsNotEmpty()
    userRole: userRole = userRole.Adopter;
}

export class UpdateuserDto implements IUpdateuser {
    _id?: string | undefined;

    @IsString()
    @IsOptional()
    name!: string;
}
