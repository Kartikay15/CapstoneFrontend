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
  // Track the selected row index

  filters = {
    all: true,       // Show all cars by default
    listed: false,   // Filter for 'LISTED' cars
    inventory: false, // Filter for 'INVENTORY' cars
    sold: false       // Filter for 'SOLD' cars
  };

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    // // Fetch cars when component initializes
    // this.carService.fetchAllCars();
    
    // // Subscribe to the service's cars array to update the component
    // this.cars = this.carService.cars;
    // console.log('this.cars', this.cars);
    // Fetch cars when component initializes
    // this.carService.getAllCars().subscribe({
    //   next: (carsData) => {
    //     this.cars = carsData; // Set the fetched cars data
    //     this.loading = false; // Set loading to false once data is fetched
    //     console.log('this.cars', this.cars);
    //   },
    //   error: (error) => {
    //     console.error('Error fetching cars:', error);
    //     this.loading = false; // Ensure loading is set to false even if there's an error
    //   }
    // });
    this.carService.getAllCars().subscribe({
      next: (carsData) => {
        this.cars = carsData; // Set the fetched cars data
        this.filterCars(); // Filter cars initially based on the selected filters
      },
      error: (error) => {
        console.error('Error fetching cars:', error);
      }
    });
  }

  filterCars(): void {
    this.filteredCars = this.cars.filter(car => {
      // Check the filters and include cars based on the selected status
      if (this.filters.all) return true; // If "All" is selected, show all cars
      if (this.filters.listed && car.carStatus === 'LISTED') return true;
      if (this.filters.inventory && car.carStatus === 'INVENTORY') return true;
      if (this.filters.sold && car.carStatus === 'SOLD') return true;
      return false; // Exclude the car if no filters match
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
