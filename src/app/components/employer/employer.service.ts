import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EmployerService {
    private apiUrl = environment.apiUrl+'employees';

    constructor(private http: HttpClient){}
    
    getAllEmployee(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/all`);
    }

    createEmployee(newEmp: any): Observable<any>{
        return this.http.post<any>(`${this.apiUrl}/create`,newEmp);
    }

    deleteEmployee(empId: string): Observable<any>{
        return this.http.delete<any>(`${this.apiUrl}/delete/${empId}`);
    }

    updateEmployee(empId: string,employee: any): Observable<any>{
        return this.http.put<any>(`${this.apiUrl}/update/${empId}`, employee);
    }
}