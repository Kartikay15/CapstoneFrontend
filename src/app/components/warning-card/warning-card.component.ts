import { Component, OnInit } from '@angular/core';
import { CarService } from '../../service/car.service';
// Adjust the import path as per your project structure

@Component({
  selector: 'app-warning-card',
  templateUrl: './warning-card.component.html',
  styleUrls: ['./warning-card.component.css'],
})
export class WarningCardComponent implements OnInit {
  constructor(public carService: CarService) {}

  ngOnInit(): void {
    
    this.carService.fetchCarCounts();
  }
}
