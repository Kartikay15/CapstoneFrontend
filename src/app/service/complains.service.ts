import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComplainsService {
  private baseUrl = 'http://localhost:8081/complaints'; 

  constructor(private http: HttpClient) {}

  getAllComplaints(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

 
  addComplaint(complaint: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/`, complaint);
  }

 
  deleteComplaint(id: number): Observable<any> {
    console.log('URL:', `${this.baseUrl}/${id}`);
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  
  changeStatus(id: number, status: string): Observable<any> {
    console.log('URL:', `${this.baseUrl}/${id}/status?status=${status}`);
    return this.http.put(`${this.baseUrl}/${id}/status`, null, {
      params: { status },
    });
  }
}
