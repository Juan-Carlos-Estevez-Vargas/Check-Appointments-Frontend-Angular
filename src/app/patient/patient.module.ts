import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { PatientFormComponent } from './patient-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PatientComponent,
    PatientFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
