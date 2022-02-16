import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from './Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private url = environment.baseUrl + "appointment";
  constructor(private http: HttpClient) { }

  /**
  * Se encarga de conectarse con el API REST del backend 
  * y ejecutar una petición HTTP de tipo GET para obtener
  * la lista de todas las citas.
  * 
  * @returns Lista de citas obtenida.
  */
  getAll(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.url + '/findAll');
  }

  /**
   * Se encarga de conectarse con el API REST del backend 
   * y ejecutar una petición HTTP de tipo POST para insertar
   * una cita.
   * 
   * @returns Inserción de cita.
   */
  create(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.url, appointment);
  }

  /**
   * Se encarga de conectarse con el API REST del backend 
   * y ejecutar una petición HTTP de tipo GET para obtener
   * una cita por su ID.
   * 
   * @returns Cita encontrada.
   */
  get(idAppointment: number): Observable<Appointment> {
    return this.http.get<Appointment>(this.url + '/findById/' + idAppointment);
  }

  /**
   * Se encarga de conectarse con el API REST del backend 
   * y ejecutar una petición HTTP de tipo PUT para actualizar
   * una cita en específico.
   * 
   * @returns Cita actualizada.
   */
  update(appointment: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(this.url, appointment);
  }

  /**
   * Se encarga de conectarse con el API REST del backend 
   * y ejecutar una petición HTTP de tipo DELETE para eliminar
   * una cita en específico.
   * 
   * @returns Cita eliminada.
   */
  delete(idAppointment: number): Observable<Appointment> {
    return this.http.delete<Appointment>(this.url + '/' + idAppointment);
  }
}
