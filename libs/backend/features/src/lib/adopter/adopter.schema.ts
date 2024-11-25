import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { from } from 'rxjs';

import {
    IAdopter,
    AdopterGender
} from '@avans-nx-workshop/shared/api';
import { IsMongoId } from 'class-validator';

export type AdopterDocument = Adopter & Document;

@Schema()
export class Adopter implements IAdopter {
    @IsMongoId()
    _id!: string;

    @Prop({
        required: true,
        type: String
    })
    firstName!: string;

    @Prop({
        required: true,
        type: String
    })
    lastName!: string;

    @Prop({
        required: true,
        type: String
    })
    emailAddress!: string;

    @Prop({
        required: true,
        type: String
    })
    phoneNumber!: string;

    @Prop({
        required: true,
        type: String,
        default: 'https://cdn-icons-png.flaticon.com/512/219/219969.png'
    })
    profileImgUrl!: string;

    @Prop({
        required: true,
        type: String,
        default: AdopterGender.Unknown
    })
    gender: AdopterGender = AdopterGender.Unknown;

    @Prop({
        required: true,
        type: Date
    })
    birthDate!: Date;
    
}

export const AdopterSchema = SchemaFactory.createForClass(Adopter);