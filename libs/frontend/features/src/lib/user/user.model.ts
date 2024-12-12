import { IUserIdentity, userRole } from '@avans-nx-workshop/shared/api';

export class User implements IUserIdentity {
  name: string = '';
  lastName: string = '';
  emailAddress: string = '';
  phoneNumber: string = '';
  password: string = '';
  address: string = '';
  userRole: userRole = userRole.Adopter;
  token?: string | undefined;
  _id: string = '0';
  
  constructor(name = '', lastName = '', emailAddress = '', phoneNumber = '',) {
    this.name = name;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
  }
  
}