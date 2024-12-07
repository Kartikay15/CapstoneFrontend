import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8081/users/roles';
  public rolesData: { [key: string]: number } = {}; // Variable to store roles data

  constructor(private http: HttpClient) {}

  
  fetchRolesData(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>(this.apiUrl);
  }

  
  initializeRolesData(): void {
    this.fetchRolesData().subscribe(
      (data) => {
        this.rolesData = data;
        console.log('Roles data fetched and stored:', this.rolesData);
      },
      (error) => {
        console.error('Error fetching roles data:', error);
      }
    );
  }

  /**
   * Get the stored roles data.
   */
  getRolesData(): { [key: string]: number } {
    return this.rolesData;
  }
}
