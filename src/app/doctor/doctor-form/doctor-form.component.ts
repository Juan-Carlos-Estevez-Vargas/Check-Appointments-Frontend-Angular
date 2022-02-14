import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../Doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: [/*'./doctor-form.component.css'*/]
})
export class DoctorFormComponent implements OnInit {
  doctor = {} as Doctor;
  title = "Add Doctor";
  constructor(private doctorService:DoctorService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadDoctorById();
  }

  /**
   * Se comunica con el servicio para insertar un nuevo médico en la base de datos
   * y luego redirecciona al listado de médicos. 
   */
   create():void {
    console.log(this.doctor);
    this.doctorService.create(this.doctor).subscribe(
      response => {
        if (response != null) {
          this.router.navigate(['/doctor/findAll'])
        }
      }
    );
  }

  /**
   * Se comunica con el servicio para actualizar un médico en la base de datos y 
   * luego redirecciona al listado de médicos.
   */
  update():void {
    this.doctorService.update(this.doctor).subscribe(
      response => {
        if (response != null) {
          this.router.navigate(['/doctor/findAll'])
        }
      }
    );
  }

  /**
   * Se encarga de cargar los datos del médico a actualizar en el formulario 
   * correspondiente.
   */
  loadDoctorById():void {
    this.activatedRoute.params.subscribe(
      param => {
        const id = param['idDoctor'];
        if (id) {
          this.doctorService.get(id).subscribe(
            doctor => this.doctor = doctor
          );
        }
      }
    );
  }
}
