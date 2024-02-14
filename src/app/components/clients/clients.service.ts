import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
    private apiUrl = environment.apiUrl+'clients';

    constructor(private http: HttpClient){}

    getAllClientsManager(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/manager/all`);
    }
}