import { Component } from '@angular/core';
import { KpiService } from '../../service/kpi.service';

@Component({
  selector: 'app-kpi-tobbar',
  imports: [],
  templateUrl: './kpi-tobbar.component.html',
  styleUrl: './kpi-tobbar.component.css'
})
export class KpiTobbarComponent {
  
  totalRentals: number = 0;
  carsRentedOut: number = 0;
  carsSold: number = 0;
  users: number = 0;
  ratings: number = 0;

  ngOnInit(): void {
    this.fetchKpis();
  }

  fetchKpis(): void {
    this.totalRentals = JSON.parse(localStorage.getItem('totalRentals') || '0');
    this.carsRentedOut = JSON.parse(localStorage.getItem('carRentedOut') || '0');
    this.carsSold =JSON.parse(localStorage.getItem('carsSold') || '0');
    this.users = JSON.parse(localStorage.getItem('users') || '0');
    this.ratings = JSON.parse(localStorage.getItem('ratings') || '0');
  }
}
