import { Component, OnInit } from '@angular/core';
import { Appointment } from './Appointment';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: [/*'./appointment.component.css'*/]
})
export class AppointmentComponent implements OnInit {
  title = "Appointment's List";
  appointments:Appointment[] = [];
  total = 0;
  constructor(private appointmentService:AppointmentService) { }

  ngOnInit(): void {
    // Lista de médicos
    this.appointmentService.getAll().subscribe(
      appointment => this.appointments = appointment
    );  
  }

  delete(appointment:Appointment):void {
    this.appointmentService.delete(appointment.idAppointment).subscribe(
      response => {
        if (response != null) {
          this.appointmentService.getAll().subscribe(
            res => this.appointments = res
          )
        }
      }
    );
  }

}