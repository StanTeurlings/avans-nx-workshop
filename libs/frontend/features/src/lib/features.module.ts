import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
    imports: [CommonModule],
    declarations: [UserDetailComponent, UserListComponent, LoginComponent]
})
export class FeaturesModule {}
