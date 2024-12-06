import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
// import { v4 as uuid } from 'uuid';
import isEmail from 'validator/lib/isEmail';
import {
    Iuser,
    userGender,
    userRole
} from '@avans-nx-workshop/shared/api';
import { IsMongoId } from 'class-validator';

export type userDocument = user & Document;

@Schema()
export class user implements Iuser {
    @IsMongoId()
    _id!: string;

    @Prop({
        required: true,
        select: true,
        type: String
    })
    name= '';

    @Prop({
        required: true,
        select: true,
        type: String
    })
    lastName= '';

    @Prop({
        required: true,
        select: true,
        type: String
    })
    address= '';

    @Prop({
        required: true,
        select: true,
        type: String
    })
    phoneNumber= '';

    @Prop({
        required: true,
        select: true,
        type: Date
    })
    birthDate= new Date();

    token?: string | undefined;

    @Prop({
        required: true,
        select: false, // do not return password in select statements
        type: String
    })
    password = '';

    @Prop({
        required: true,
        type: String,
        select: true,
        unique: true
        // validate: {
        //     validator: isEmail,
        //     message: 'should be a valid email address'
        // }
    })
    emailAddress = '';

    @Prop({
        required: false,
        select: true,
        default: 'https://cdn-icons-png.flaticon.com/512/219/219969.png'
    })
    profileImgUrl!: string;

    @Prop({
        required: false,
        type: String,
        default: userGender.Unknown
    })
    gender: userGender = userGender.Unknown;

    @Prop({
        required: true,
        type: String,
        default: userRole.Adopter
    })
    userRole: userRole = userRole.Adopter;
}

export const userSchema = SchemaFactory.createForClass(user);
