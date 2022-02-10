import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppointmentComponent,
    AppointmentFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppointmentRoutingModule
  ]
})
export class AppointmentModule { }
