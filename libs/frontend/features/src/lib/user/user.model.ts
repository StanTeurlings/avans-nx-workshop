export class User {
  id: number = 0;
  name: string = '';
  lastName: string = '';
  emailAddress: string = '';
  phoneNumber: string = '';
  
  constructor(name = '', lastName = '', emailAddress = '', phoneNumber = '') {
    this.name = name;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
  }
}