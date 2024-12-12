import { IEntity } from 'libs/share-a-meal/common/src/lib/entity/entity.model';
import { IToken, IUserRegistration } from './auth.interface';
import { Id } from './id.type';

export enum userGender {
    Male = 'Male',
    Female = 'Female',
    None = 'None',
    Unknown = 'Unknown'
}

export enum userRole {
    Adopter = 'Adopter',
    Shelter = 'Shelter',
}

/**
 * Minimal user information
 */

export interface IUserIdentity extends IEntity {
    name: string;
    lastName: string;
    password: string;
    emailAddress: string;
    address: string;
    phoneNumber: string;
    userRole: userRole;
    token?: string;
}

/**
 * All user information, excl. domain entities
 */
export interface IUserInfo extends IUserRegistration {
    _id: Id;
    name: string;
    lastName: string;
    password: string;
    emailAddress: string;
    address: string;
    phoneNumber: string;
    userRole: userRole;
    birthDate: Date;
    profileImgUrl: string;
    token?: string;
    gender: userGender;
}

/**
 * All user information, incl. domain entities
 */
export interface IUser extends IUserInfo {
    // turtle: ITurtle[];
}

export type ICreateuser = Pick<IUser, 'name' | 'password' | 'emailAddress'>;
export type IUpdateuser = Partial<Omit<IUser, 'id'>>;
export type IUpsertuser = IUser;
