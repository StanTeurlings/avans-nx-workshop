import { IEntity } from "libs/frontend/common/src/lib/entity/entity.model";

export enum AdopterGender {
  Male = 'Male',
  Female = 'Female',
  None = 'None',
  Unknown = 'Unknown'
}

export interface IAdopterIdentity extends IEntity {
  firstName: string;
  lastName: string;
  emailAddress: string;
  birthDate: Date;
  phoneNumber: string;
}

export interface IAdopterInfo {
  profileImgUrl: string;
  gender: AdopterGender;
}

export interface IAdopter extends IAdopterIdentity, IAdopterInfo {}

export type ICreateAdopter = Pick<
  IAdopter,
  'firstName' | 'lastName' | 'emailAddress' | 'phoneNumber'
>;
export type IUpdateAdopter = Partial<Omit<IAdopter, '_id'>>;
export type IUpsertAdopter = IAdopter;
