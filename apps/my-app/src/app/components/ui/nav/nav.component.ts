import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IuserIdentity } from '@avans-nx-workshop/shared/api';
import { AuthService } from '../../../../../../../libs/backend/auth/src/lib/auth/auth.service';


@Component({
    selector: 'avans-nx-workshop-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
    currentUser$: Observable<IuserIdentity | undefined> | undefined;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.currentUser$ = this.authService.currentUser$;
    }

    logout() {
        //this.authService.logout();
    }
}