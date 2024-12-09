// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class KpiService {

//   private apiUrl = 'http://localhost:8081/kpis/'; 
//   constructor(private http: HttpClient) {}

//   
//   getKpis(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KpiService {
  private apiUrl = 'http://localhost:8081/kpis/'; 
  private localStorageKey = 'kpiData'; 

  constructor(private http: HttpClient) {}
  

   getKpis(): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    const storedKpis = localStorage.getItem(this.localStorageKey);
    
    if (storedKpis) {
      
      return new Observable((observer) => {
        observer.next(JSON.parse(storedKpis));
        observer.complete();
      });
    } else {
      
      return this.http.get<any[]>(this.apiUrl,httpOptions).pipe(
        tap(data => {
          
          data.forEach(kpi => {
            localStorage.setItem(kpi.name, JSON.stringify(kpi.value));
          });

          localStorage.setItem(this.localStorageKey, JSON.stringify(data));
        })
      );
    }
  }

  getKpisForceRefresh(): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    };
  
    return this.http.get<any[]>(this.apiUrl, httpOptions).pipe(
      tap(data => {
       
        data.forEach(kpi => {
          localStorage.setItem(kpi.name, JSON.stringify(kpi.value));
        });
  
        localStorage.setItem(this.localStorageKey, JSON.stringify(data));
      })
    );
  }  
}
