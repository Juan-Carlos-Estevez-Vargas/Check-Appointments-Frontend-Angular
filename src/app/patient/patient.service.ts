import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './Patient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private url = environment.baseUrl + "patient";
  constructor(private http: HttpClient) { }

  /**
   * Se encarga de conectarse con el API REST del backend 
   * y ejecutar una petición HTTP de tipo GET para obtener
   * la lista de todos los pacientes.
   * 
   * @returns Lista de pacientes obtenida.
   */
  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url + '/findAll');
  }

  /**
   * Se encarga de conectarse con el API REST del backend 
   * y ejecutar una petición HTTP de tipo POST para insertar
   * un paciente.
   * 
   * @returns Inserción de paciente.
   */
  create(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.url, patient);
  }

  /**
   * Se encarga de conectarse con el API REST del backend 
   * y ejecutar una petición HTTP de tipo GET para obtener
   * un paciente por su ID.
   * 
   * @returns Paciente encontrado.
   */
  get(idPatient: string): Observable<Patient> {
    return this.http.get<Patient>(this.url + '/findById/' + idPatient);
  }

  /**
   * Se encarga de conectarse con el API REST del backend 
   * y ejecutar una petición HTTP de tipo PUT para actualizar
   * un paciente en específico.
   * 
   * @returns Paciente actualizado.
   */
  update(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.url, patient);
  }

  /**
   * Se encarga de conectarse con el API REST del backend 
   * y ejecutar una petición HTTP de tipo DELETE para eliminar
   * un paciente en específico.
   * 
   * @returns Paciente actualizado.
   */
  delete(idPatient: string): Observable<Patient> {
    return this.http.delete<Patient>(this.url + '/' + idPatient);
  }

}
