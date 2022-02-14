import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/doctor/Doctor';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Patient } from 'src/app/patient/Patient';
import { PatientService } from 'src/app/patient/patient.service';
import { Appointment } from '../Appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: [/*'./appointment-form.component.css'*/]
})
export class AppointmentFormComponent implements OnInit {
  appointment = {} as Appointment;
  title = "Add Doctor";
  doctors:Doctor[] = [];
  patients:Patient[] = [];
  constructor(private appointmentService:AppointmentService, private router:Router, private activatedRoute:ActivatedRoute, private doctorService:DoctorService, private patientService:PatientService) { }

  ngOnInit(): void {
    this.loadAppointmentById();

    // Listado de médicos
    this.doctorService.getAll().subscribe(
      doctor => this.doctors = doctor
    );

    // Listado de pacientes
    this.patientService.getAll().subscribe(
      patient => this.patients = patient
    );
  }

  /**
   * Se comunica con el servicio para insertar una nueva cita en la base de datos
   * y luego redirecciona al listado de citas. 
   */
   create():void {
    console.log(this.appointment);
    this.appointmentService.create(this.appointment).subscribe(
      response => {
        if (response != null) {
          this.router.navigate(['/appointment/findAll'])
        }
      }
    );
  }

  /**
   * Se comunica con el servicio para actualizar una cita en la base de datos y 
   * luego redirecciona al listado de citas.
   */
  update():void {
    this.appointmentService.update(this.appointment).subscribe(
      response => {
        if (response != null) {
          this.router.navigate(['/appointment/findAll'])
        }
      }
    );
  }

  /**
   * Se encarga de cargar los datos de la cita a actualizar en el formulario 
   * correspondiente.
   */
  loadAppointmentById():void {
    this.activatedRoute.params.subscribe(
      param => {
        const id = param['idAppointment'];
        if (id) {
          this.appointmentService.get(id).subscribe(
            appointment => this.appointment = appointment
          );
        }
      }
    );
  }
}
