import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../../backend/auth/src/lib/auth/auth.service';

@Component({
    selector: 'avans-nx-workshop-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    onSubmit() : void {
        if (this.loginForm.valid) {
            const emailAddress = this.loginForm.value.email;
            const password = this.loginForm.value.password;
            this.authService.login({emailAddress, password}).then((user) => {
                if (user) {
                    this.router.navigate(['/']);
                }
            });	
        } else {
            console.log('LoginForm invalid');
        }
    }
}