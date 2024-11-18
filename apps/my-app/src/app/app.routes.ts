import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';

export const appRoutes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'users' },
    { path: 'about', pathMatch: "full", component: AboutComponent },
    { path: 'users', pathMatch: "full", component: UserListComponent },
    { path: 'users/new', pathMatch: "full", component: UserEditComponent },
    { path: 'users/:id', pathMatch: "full", component: UserDetailComponent },
    { path: 'users/:id/edit', pathMatch: "full", component: UserEditComponent },
    { path: '**', pathMatch: "full", redirectTo: 'users' }
];

export class AppRoutingModule {}