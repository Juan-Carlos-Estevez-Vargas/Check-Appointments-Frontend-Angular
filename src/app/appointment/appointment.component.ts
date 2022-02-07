import { Component, OnInit } from '@angular/core';
import { Appointment } from './Appointment';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: [/*'./appointment.component.css'*/]
})
export class AppointmentComponent implements OnInit {
  title:string = "Appointment's List";
  appointments:Appointment[] = [];
  constructor(private appointmentService:AppointmentService) { }

  ngOnInit(): void {
    // Lista de médicos
    this.appointmentService.getAll().subscribe(
      appointment => this.appointments = appointment
    );
  }

  delete(appointment:Appointment):void {
    this.appointmentService.delete(appointment.idAppointment).subscribe(
      response => this.appointmentService.getAll().subscribe(
        res => this.appointments = res
      )
    );
  }

}