import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PatientFormComponent } from './patient/patient-form.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorFormComponent } from './doctor/doctor-form/doctor-form.component';
import { NavBarComponent } from './commons/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentFormComponent } from './appointment/appointment-form/appointment-form.component';
import { FooterComponent } from './commons/footer/footer.component';

const routes:Routes=[
  {path:'', component:HomeComponent},
  {path:'patient/findAll', component:PatientComponent},
  {path:'doctor/findAll', component:DoctorComponent},
  {path:'appointment/findAll', component:AppointmentComponent},
  {path:'patient', component:PatientFormComponent},
  {path:'doctor', component:DoctorFormComponent},
  {path:'appointment', component:AppointmentFormComponent},
  {path:'patient/:idPatient', component:PatientFormComponent},
  {path:'doctor/:idDoctor', component:DoctorFormComponent},
  {path:'appointment/:idAppointment', component:AppointmentFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientFormComponent,
    DoctorComponent,
    DoctorFormComponent,
    NavBarComponent,
    HomeComponent,
    AppointmentComponent,
    AppointmentFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
