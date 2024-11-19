import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
    selector: 'avans-nx-workshop-user-list',
    templateUrl: './user-list.component.html',
    styles: []
})
export class UserListComponent implements OnInit{
    users: User[] = [];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.users = this.userService.getUsers();
    }
}
