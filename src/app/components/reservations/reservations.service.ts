import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
    private apiUrl = environment.apiUrl+'appointments';

    constructor(private http: HttpClient){}

    createAppointment(appointmentData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, appointmentData);
    }

    deleteAppointment(appointmentId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${appointmentId}`);
    }

    createRequestedServices(appointmentId: string, requestedServicesData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/requestedService/${appointmentId}`, requestedServicesData);
    }

    updateAppointment(appointmentId: string, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${appointmentId}`, updatedData);
    }

    updateAppointmentStatus(appointmentId: string, updatedData: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/updateStatus/${appointmentId}`, updatedData);
    }

    getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
    }

    getFullAppointment(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/full`);
    }

    getFullAppointmentPending():Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/pending`);
    }

    getFullAppointmentConfirmed():Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/confirmed`);
    }

    getFullAppointmentCancelled():Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/cancelled`);
    }

    getAppointmentById(appointmentId: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/appointment/${appointmentId}`);
    }
    
}