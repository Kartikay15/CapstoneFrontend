import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KpiService {

  private apiUrl = 'http://localhost:8081/kpis/'; // Base URL for the KPIs endpoint

  constructor(private http: HttpClient) {}

  // Method to fetch KPI data from the endpoint
  getKpis(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, tap } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class KpiService {

//   private apiUrl = 'http://localhost:8081/kpis/'; // Base URL for the KPIs endpoint
//   private localStorageKey = 'kpiData'; // Key for storing KPI data in local storage

//   constructor(private http: HttpClient) {}

//   // Method to fetch KPI data from the endpoint or local storage
//   getKpis(): Observable<any[]> {
//     const storedKpis = localStorage.getItem(this.localStorageKey);
    
//     // If KPI data is available in local storage, return it as an observable
//     if (storedKpis) {
//       return new Observable((observer) => {
//         observer.next(JSON.parse(storedKpis));
//         observer.complete();
//       });
//     } else {
//       // If not available in local storage, fetch from API and store in local storage
//       return this.http.get<any[]>(this.apiUrl).pipe(
//         // After fetching data from the API, store it in local storage
//         tap(data => {
//           localStorage.setItem(this.localStorageKey, JSON.stringify(data));
//         })
//       );
//     }
//   }
// }
