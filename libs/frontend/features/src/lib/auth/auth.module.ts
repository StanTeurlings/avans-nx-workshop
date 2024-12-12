import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@NgModule({
    declarations: [LoginComponent],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
    providers: [AuthService],
    exports: [LoginComponent],
  })
  export class AuthModule {}
  