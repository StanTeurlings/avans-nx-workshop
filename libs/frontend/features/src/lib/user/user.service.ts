import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly users: User[] = [
    {
      id: 0,
      name: 'Stan',
      lastName: 'Teurlings',
      emailAddress: 'S.Teurlings@avans.nl',
      phoneNumber: '06-12345678',
    },
    {
      id: 1,
      name: 'John',
      lastName: 'Doe',
      emailAddress: 'J.Doe@avans.nl',
      phoneNumber: '06-87654321',
    },
    {
      id: 2,
      name: 'Jane',
      lastName: 'Doe',
      emailAddress: 'J.Doe@avans.nl',
      phoneNumber: '06-12348765',
    },
    {
      id: 3,
      name: 'Max',
      lastName: 'Lopez',
      emailAddress: 'M.Lopez@avans.nl',
      phoneNumber: '06-87651234',
    },
    {
      id: 4,
      name: 'Pam',
      lastName: 'Quinn',
      emailAddress: 'P.Quinn@avans.nl',
      phoneNumber: '06-12345678',
    }
  ];

  constructor() {
    console.log('UserService created');
  }

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  updateUser(id: number, user: User): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new Error(`User with id ${id} not found`);
    }
    this.users[index] = user;
  }
}