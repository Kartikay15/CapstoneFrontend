

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
  selectedCarIndex: number | null = null; // Track the selected row index
  loading: boolean = true;
  filteredCars: any[] = [];
  selectedFilter: string = 'all';
  // Track the selected row index

  filters = {
    all: true,       // Show all cars by default
    listed: false,   // Filter for 'LISTED' cars
    inventory: false, // Filter for 'INVENTORY' cars
    sold: false       // Filter for 'SOLD' cars
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
        this.filteredCars = this.cars; // Use the server-provided data directly
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
    if (this.cars.length === this.size) { // Ensure you only move to the next page if there's content to show
      this.page++;
      this.getData();
    }
  }
  filterCars(): void {
    // Fetch new data from the server when the filter changes
    this.page = 0; // Reset to the first page when applying a new filter
    this.carService.getAllCars(this.page, this.size, this.selectedFilter).subscribe({
      next: (carsData) => {
        this.cars = carsData; 
        this.filteredCars = this.cars; // No need for additional local filtering since the server provides filtered data
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching cars:', error);
      }
    });
  }
  
  

  // Toggle car status between 'INVENTORY' and 'SOLD'
  toggleCarStatus(car: any): void {
    const newStatus = car.carStatus === 'INVENTORY' ? 'LISTED' : 'INVENTORY';
    
    // Call the service to update the car status
    this.carService.updateCarStatus(car.id, newStatus).subscribe(
      (response) => {
        car.carStatus = newStatus; // Update the car status in the UI after successful response
        console.log('Car status updated successfully:', response);
      },
      (error) => {
        console.error('Error updating car status:', error);
      }
    );
  }

  // Toggle visibility of car details below the row
  toggleCarDetails(index: number): void {
    if (this.selectedCarIndex === index) {
      this.selectedCarIndex = null; // Collapse the details if already open
    } else {
      this.selectedCarIndex = index; // Show the details
    }
  }
}


