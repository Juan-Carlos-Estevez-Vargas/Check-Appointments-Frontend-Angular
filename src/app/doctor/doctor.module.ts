import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DoctorComponent,
    DoctorFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
