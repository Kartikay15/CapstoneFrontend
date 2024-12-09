import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private baseUrl = 'http://localhost:8081/cars/count';
  private carsUrl = 'http://localhost:8081/cars';

  public cars: any[] = [];
  // Variables to store car counts
  totalCars: number = 0;
  rentalCars: number = 0;
  resellCars: number = 0;

  

  constructor(private http: HttpClient) {}

  
  getTotalCars(): Observable<number> {
    
    return this.http.get<number>(`${this.baseUrl}`);
  }

  
  getRentalCars(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/rental`);
  }

  
  getResellCars(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/resell`);
  }

  
  getAllCars(page: number, size: number, status: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.carsUrl}?page=${page}&size=${size}&status=${status}`);
  }

  getAllCars1():Observable<any[]>{
    return this.http.get<any[]>(`${this.carsUrl}`);
  }
  
  fetchCarCounts(): void {
    this.getTotalCars().subscribe({
      next: (count) => {
        this.totalCars = count;
        console.log('Total Cars:', this.totalCars);
      },
      error: (error) => console.error('Error fetching total cars:', error),
    });

    this.getRentalCars().subscribe({
      next: (count) => {
        this.rentalCars = count;
        console.log('Rental Cars:', this.rentalCars);
      },
      error: (error) => console.error('Error fetching rental cars:', error),
    });

    this.getResellCars().subscribe({
      next: (count) => {
        this.resellCars = count;
        console.log('Resell Cars:', this.resellCars);
      },
      error: (error) => console.error('Error fetching resell cars:', error),
    });
  }
  /*
  const params = { newStatus };

  const httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${token}` // Set token in the Authorization header
    }),
    params // Pass the query parameter
  };*/ 
  updateCarStatus(carId: number, newStatus: string): Observable<any> {
    const url = `${this.carsUrl}/${carId}/status`;
    const params = { newStatus };
    
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    };
    

    return this.http.put(url, {}, { params, ...httpOptions });
  }

  private postUrl = 'http://localhost:8081/cars';
  private evaluationUrl = 'http://localhost:8081/evaluations/car';

  createCar(car: any): Observable<any> {
    return this.http.post<any>(this.postUrl, car).pipe(
      switchMap((createdCar) => {
        const carId = createdCar.id; 
        return this.http.post(`${this.evaluationUrl}/${carId}`, {});
      })
    );
  }

  private getBrands = 'http://localhost:8081/cars/brands';

  getAllBrands(): Observable<any[]> {
    return this.http.get<any[]>(this.getBrands);
  }
}
