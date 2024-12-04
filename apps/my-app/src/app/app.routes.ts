import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { UserListComponent } from 'libs/frontend/features/src/lib/user/user-list/user-list.component';
import { UserDetailComponent } from 'libs/frontend/features/src/lib/user/user-detail/user-detail.component';
import { UserEditComponent } from 'libs/frontend/features/src/lib/user/user-edit/user-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const appRoutes: Routes = [
    { path: '', pathMatch: "full", component: DashboardComponent },
    { path: 'about', pathMatch: "full", component: AboutComponent },
    { path: 'users', pathMatch: "full", component: UserListComponent },
    { path: 'user/new', pathMatch: "full", component: UserEditComponent },
    { path: 'users/:id', pathMatch: "full", component: UserDetailComponent },
    { path: 'users/:id/edit', pathMatch: "full", component: UserEditComponent },
    { path: '**', pathMatch: "full", redirectTo: '' }
];

export class AppRoutingModule {}