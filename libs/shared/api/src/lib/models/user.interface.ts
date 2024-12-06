import { IEntity } from 'libs/share-a-meal/common/src/lib/entity/entity.model';
import { IToken, IuserRegistration } from './auth.interface';
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

export interface IuserIdentity extends IEntity {
    name: string;
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
export interface IuserInfo extends IuserRegistration {
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
export interface Iuser extends IuserInfo {
    // turtle: ITurtle[];
}

export type ICreateuser = Pick<Iuser, 'name' | 'password' | 'emailAddress'>;
export type IUpdateuser = Partial<Omit<Iuser, 'id'>>;
export type IUpsertuser = Iuser;
