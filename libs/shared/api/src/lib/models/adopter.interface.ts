import { IEntity } from 'libs/share-a-meal/common/src/lib/entity/entity.model';
import { IToken, IAdopterRegistration } from './auth.interface';
import { Id } from './id.type';

export enum AdopterGender {
    Male = 'Male',
    Female = 'Female',
    None = 'None',
    Unknown = 'Unknown'
}

/**
 * Minimal Adopter information
 */

export interface IAdopterIdentity extends IEntity {
    firstName: string;
    lastName: string;
    password: string;
    emailAddress: string;
    address: string;
    phoneNumber: string;
    birthDate: Date;
    token?: string;
    gender: AdopterGender;
}

/**
 * All Adopter information, excl. domain entities
 */
export interface IAdopterInfo extends IAdopterRegistration {
    _id: Id;
    firstName: string;
    lastName: string;
    password: string;
    emailAddress: string;
    address: string;
    phoneNumber: string;
    birthDate: Date;
    profileImgUrl: string;
    token?: string;
    gender: AdopterGender;
}

/**
 * All Adopter information, incl. domain entities
 */
export interface IAdopter extends IAdopterInfo {
}

export type ICreateAdopter = Pick<IAdopter, 'firstName' | 'password' | 'emailAddress'>;
export type IUpdateAdopter = Partial<Omit<IAdopter, 'id'>>;
export type IUpsertAdopter = IAdopter;
