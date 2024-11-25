import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AdopterListComponent } from './adopter/adopter-list/adopter-list.component';
import { AdopterEditComponent } from './adopter/adopter-edit/adopter-edit.component';
import { AdopterDetailComponent } from './adopter/adopter-detail/adopter-detail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        UserDetailComponent,
        UserListComponent,
        AdopterListComponent,
        AdopterEditComponent,
        AdopterDetailComponent
    ]
})
export class FeaturesModule {}
