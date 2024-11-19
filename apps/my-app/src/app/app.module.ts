import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { UserListComponent } from 'libs/frontend/features/src/lib/user/user-list/user-list.component';
import { UserDetailComponent } from 'libs/frontend/features/src/lib/user/user-detail/user-detail.component';
import { UserEditComponent } from 'libs/frontend/features/src/lib/user/user-edit/user-edit.component';
import { NavComponent } from "./components/ui/nav/nav.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
