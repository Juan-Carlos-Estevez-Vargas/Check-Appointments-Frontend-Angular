import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../Appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  appointment:Appointment = new Appointment();
  title:string = "Add Doctor";
  constructor(private appointmentService:AppointmentService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadAppointmentById();
  }

  /**
   * Se comunica con el servicio para insertar una nueva cita en la base de datos
   * y luego redirecciona al listado de citas. 
   */
   create():void {
    console.log(this.appointment);
    this.appointmentService.create(this.appointment).subscribe(
      response => this.router.navigate(['/appointment/findAll'])
    );
  }

  /**
   * Se comunica con el servicio para actualizar una cita en la base de datos y 
   * luego redirecciona al listado de citas.
   */
  update():void {
    this.appointmentService.update(this.appointment).subscribe(
      response => this.router.navigate(['/appointment/findAll'])
    );
  }

  /**
   * Se encarga de cargar los datos de la cita a actualizar en el formulario 
   * correspondiente.
   */
  loadAppointmentById():void {
    this.activatedRoute.params.subscribe(
      param => {
        let id = param['idAppointment'];
        if (id) {
          this.appointmentService.get(id).subscribe(
            appointment => this.appointment = appointment
          );
        }
      }
    );
  }
}
