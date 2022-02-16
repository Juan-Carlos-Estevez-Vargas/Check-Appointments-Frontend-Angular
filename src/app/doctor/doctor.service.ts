import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './Doctor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private url = environment.baseUrl + "doctor";
  constructor(private http: HttpClient) { }

  /**
   * Se encarga de conectarse con el API REST del backend 
   * y ejecutar una petición HTTP de tipo GET para obtener
   * la lista de todos los médicos.
   * 
   * @returns Lista de médicos obtenida.
   */
  getAll(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.url + '/findAll');
  }

  /**
   * Se encarga de conectarse con el API REST del backend 
   * y ejecutar una petición HTTP de tipo POST para insertar
   * un médico.
   * 
   * @returns Inserción de médico.
   */
  create(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.url, doctor);
  }

  /**
   * Se encarga de conectarse con el API REST del backend 
   * y ejecutar una petición HTTP de tipo GET para obtener
   * un médico por su ID.
   * 
   * @returns Médico encontrado.
   */
  get(idDoctor: string): Observable<Doctor> {
    return this.http.get<Doctor>(this.url + '/findById/' + idDoctor);
  }

  /**
   * Se encarga de conectarse con el API REST del backend 
   * y ejecutar una petición HTTP de tipo PUT para actualizar
   * un médico en específico.
   * 
   * @returns Médico actualizado.
   */
  update(doctor: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(this.url, doctor);
  }

  /**
   * Se encarga de conectarse con el API REST del backend 
   * y ejecutar una petición HTTP de tipo DELETE para eliminar
   * un médico en específico.
   * 
   * @returns Médico actualizado.
   */
  delete(idDoctor: string): Observable<Doctor> {
    return this.http.delete<Doctor>(this.url + '/' + idDoctor);
  }
}
