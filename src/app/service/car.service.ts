// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class CarService {
//   private baseUrl = 'http://localhost:8081/cars/count';
//   private carsUrl = 'http://localhost:8081/cars'; // New endpoint for fetching all cars
 

//   public cars: any[] = [];
//   // Variables to store car counts
//   totalCars: number = 0;
//   rentalCars: number = 0;
//   resellCars: number = 0;

//   constructor(private http: HttpClient) {}

//   // Method to fetch total cars
//   getTotalCars(): Observable<number> {
//     return this.http.get<number>(`${this.baseUrl}`);
//   }

//   // Method to fetch rental cars
//   getRentalCars(): Observable<number> {
//     return this.http.get<number>(`${this.baseUrl}/rental`);
//   }

//   // Method to fetch resell cars
//   getResellCars(): Observable<number> {
//     return this.http.get<number>(`${this.baseUrl}/resell`);
//   }

//   // Method to fetch all cars
//   getAllCars(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.carsUrl}`);
//   }

//   // Method to fetch and store data
//   fetchCarCounts(): void {
//     this.getTotalCars().subscribe(
//       (count) => {
//         this.totalCars = count;
//         console.log('Total Cars:', this.totalCars);
//       },
//       (error) => console.error('Error fetching total cars:', error)
//     );
  
//     this.getRentalCars().subscribe(
//       (count) => {
//         this.rentalCars = count;
//         console.log('Rental Cars:', this.rentalCars);
//       },
//       (error) => console.error('Error fetching rental cars:', error)
//     );
  
//     this.getResellCars().subscribe(
//       (count) => {
//         this.resellCars = count;
//         console.log('Resell Cars:', this.resellCars);
//       },
//       (error) => console.error('Error fetching resell cars:', error)
//     );
//   }

//   // Method to fetch all cars and store them in the service

//   // Method to fetch all cars and store them in the service
//   fetchAllCars(): void {
//     this.getAllCars().subscribe(
//       (cars) => {
//         this.cars = cars;  // Store cars in service
//         console.log('Fetched All Cars:', cars);
//       },
//       (error) => console.error('Error fetching all cars:', error)
//     );
//   }

//   updateCarStatus(carId: number, newStatus: string): Observable<any> {
//     const url = `${this.carsUrl}/${carId}/status`; // Endpoint for updating car status
//     const params = { newStatus }; // Query parameter for the new status

//     return this.http.patch(url, {}, { params });
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  // Method to fetch total cars
  getTotalCars(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}`);
  }

  // Method to fetch rental cars
  getRentalCars(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/rental`);
  }

  // Method to fetch resell cars
  getResellCars(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/resell`);
  }

  // Method to fetch all cars
  getAllCars(page: number, size: number, status: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.carsUrl}?page=${page}&size=${size}&status=${status}`);
  }

  getAllCars1():Observable<any[]>{
    return this.http.get<any[]>(`${this.carsUrl}`);
  }
  // 
  // Fetch car counts using an observer argument
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

  // Fetch all cars and store in the service using an observer argument
  // fetchAllCars(): void {
  //   this.getAllCars().subscribe({
  //     next: (cars) => {
  //       this.cars = cars;
  //       console.log('Fetched All Cars:', cars);
  //     },
  //     error: (error) => console.error('Error fetching all cars:', error),
  //   });
  // }

  // Update car status using PATCH request with modern observable handling
  updateCarStatus(carId: number, newStatus: string): Observable<any> {
    const url = `${this.carsUrl}/${carId}/status`;
    const params = { newStatus };

    return this.http.patch(url, {}, { params });
  }
}
