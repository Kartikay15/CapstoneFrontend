import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CarService } from '../../service/car.service';
import { CommonModule, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-seller',
  imports: [FormsModule, NgIf, CommonModule, RouterLink, HeaderComponent],
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css'
})
export class SellerComponent {

  car = {
    car_model: '',
    purchase_year: '',
    fuel_type: 'Petrol', 
    body_type: 'Metal', 
    car_condition: 'Excellent', 
    milage: null,
    brand: '', 
    platform: 'RESELL'
  };

  brands: string[] = []; 

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
   
    this.carService.getAllBrands().subscribe({
      next: (response) => {
        this.brands = response; 
        console.log(this.brands);
      },
      error: (error) => {
        console.error('Error fetching brands:', error);
        alert('Failed to load car brands. Please try again.');
      }
    });
  }

  submitForm(form: any) {
    if (form.valid) {
      
      this.carService.createCar(this.car).subscribe({
        next: (response) => {
          console.log('Car created successfully:', response);
          //alert('Car listed successfully!');
          form.reset(); // Reset the form after successful submission
        },
        error: (error) => {
          console.error('Error creating car:', error);
          alert('Failed to list car. Please try again.');
        }
      });
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('login');
}
}
