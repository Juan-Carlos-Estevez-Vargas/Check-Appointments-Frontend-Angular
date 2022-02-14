import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from './Patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: [/*'./patient-form.component.css'*/]
})
export class PatientFormComponent implements OnInit {
  patient = {} as Patient;
  title = "Add Patient";

  constructor(private patientService:PatientService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadPatientById();
  }

  /**
   * Se comunica con el servicio para insertar un nuevo paciente en la base de datos
   * y luego redirecciona al listado de pacientes. 
   */
  create():void {
    console.log(this.patient);
    this.patientService.create(this.patient).subscribe(
      response => {
        if (response != null) {
          this.router.navigate(['/patient/findAll'])
        }
      }
    );
  }

  /**
   * Se comunica con el servicio para actualizar un paciente en la base de datos y 
   * luego redirecciona al listado de pacientes.
   */
  update():void {
    this.patientService.update(this.patient).subscribe(
      response => {
        if (response != null) {
          this.router.navigate(['/patient/findAll'])
        }
      }
    );
  }

  /**
   * Se encarga de cargar los datos del paciente a actualizar en el formulario 
   * correspondiente.
   */
  loadPatientById():void {
    this.activatedRoute.params.subscribe(
      param => {
        const id = param['idPatient'];
        if (id) {
          this.patientService.get(id).subscribe(
            patient => this.patient = patient
          );
        }
      }
    );
  }
}
