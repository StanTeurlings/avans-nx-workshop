import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
    selector: 'avans-nx-workshop-user-edit',
    templateUrl: './user-edit.component.html',
    styles: []
})
export class UserEditComponent implements OnInit{
    userId: string | null = null;
    user: User | null = null;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.userId = params.get('id');
            if (this.userId) {
                this.user = this.userService.getUser(Number(this.userId));
            } else {
                this.user = new User();
            }
        });
    }

    saveUser() {
        if (this.userId) {
            if (this.user) {
                this.userService.updateUser(Number(this.userId), this.user);
            }
        } else {
            if (this.user) {
                this.userService.addUser(this.user);
            }
        }
        this.router.navigate(['/users']);
    }
}
