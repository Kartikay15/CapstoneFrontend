

import { Component, OnInit } from '@angular/core';
import { CarService } from '../../service/car.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-listings',
  templateUrl: './car-listings.component.html',
  styleUrls: ['./car-listings.component.css'],
  imports:[NgIf, NgFor, CommonModule, FormsModule]
})
export class CarListingsComponent implements OnInit {
  cars: any[] = [];
  selectedCarIndex: number | null = null; 
  loading: boolean = true;
  filteredCars: any[] = [];
  selectedFilter: string = 'all';
  

  filters = {
    all: true,       
    listed: false,   
    inventory: false, 
    sold: false       
  };

  page: number = 0;
  size: number = 10;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.carService.getAllCars(this.page, this.size, this.selectedFilter).subscribe({
      next: (carsData) => {
        this.cars = carsData;
        this.filteredCars = this.cars; // 
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching cars:', error);
        this.loading = false;
      }
    });
  }
  

 
  prev() {
    if (this.page > 0) {
      this.page--;
      this.getData();
    }
  }

  next() {
    if (this.cars.length === this.size) { 
      this.page++;
      this.getData();
    }
  }
  filterCars(): void {
    // fetch on filter change
    this.page = 0; 
    this.carService.getAllCars(this.page, this.size, this.selectedFilter).subscribe({
      next: (carsData) => {
        this.cars = carsData; 
        this.filteredCars = this.cars; 
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching cars:', error);
      }
    });
  }
  
  getPageNumbers(): number[] {
    const totalItems = 100; // Assume a fixed total for demonstration or fetch dynamically
    const totalPages = Math.ceil(totalItems / this.size);
    return Array.from({ length: totalPages }, (_, i) => i);
  }
  
  goToPage(pageNum: number): void {
    if (pageNum >= 0) {
      this.page = pageNum;
      this.getData();
    }
  }

  
  toggleCarStatus(car: any): void {
    const newStatus = car.carStatus === 'INVENTORY' ? 'LISTED' : 'INVENTORY';
    
    
    this.carService.updateCarStatus(car.id, newStatus).subscribe(
      (response) => {
        car.carStatus = newStatus; 
        console.log('Car status updated successfully:', response);
      },
      (error) => {
        console.error('Error updating car status:', error);
      }
    );
  }

  // called when view details is prressses
  toggleCarDetails(index: number): void {
    if (this.selectedCarIndex === index) {
      this.selectedCarIndex = null; 
    } else {
      this.selectedCarIndex = index; 
    }
  }
}


