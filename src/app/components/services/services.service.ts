import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private apiUrl = 'http://localhost:3000/services'; 

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  createService(newService: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, newService);
  }

  updateService(serviceId: string, updatedService: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${serviceId}`, updatedService);
  }

  deleteService(serviceId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${serviceId}`);
  }
}
