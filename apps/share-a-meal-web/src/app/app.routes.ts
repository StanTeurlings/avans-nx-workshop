import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import {
    LoginFormComponent,
    RegisterFormComponent
} from '@avans-nx-workshop/share-a-meal/auth';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: DashboardComponent
    },
    {
        path: 'about',
        pathMatch: 'full',
        component: AboutComponent
    }
];
