import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-userlist/user-list.component';
import { AdopterListComponent } from './adopter/adopter-list/adopter-list.component';
import { AdopterEditComponent } from './adopter/adopter-edit/adopter-edit.component';
import { AdopterDetailComponent } from './adopter/adopter-detail/adopter-detail.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        UserDetailsComponent,
        UserListComponent,
        AdopterListComponent,
        AdopterEditComponent,
        AdopterDetailComponent
    ]
})
export class FeaturesModule {}
