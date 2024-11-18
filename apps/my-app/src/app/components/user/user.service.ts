import { Injectable } from '@angular/core';
import { User, UserRole } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly users: User[] = [
    {
      id: 0,
      firstName: 'Stan',
      lastName: 'Teurlings',
      emailAdress: 'S.Teurlings@avans.nl',
      role: UserRole.admin
    },
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      emailAdress: 'J.Doe@avans.nl',
      role: UserRole.guest
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      emailAdress: 'J.Doe@avans.nl',
      role: UserRole.guest
    },
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