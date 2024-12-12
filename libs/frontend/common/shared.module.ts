import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';
import { ModalConfirmYesNoComponent } from './modal/modal.confirm-yes-no.component';
import { ModalLeaveYesNoComponent } from './modal/modal.leave-yes-no.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SpinnerComponent,
    AlertComponent,
    ModalConfirmYesNoComponent,
    ModalLeaveYesNoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SpinnerComponent, AlertComponent],
})
export class SharedModule {}
