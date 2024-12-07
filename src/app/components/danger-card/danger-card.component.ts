import { Component, OnInit } from '@angular/core';
import { KpiService } from '../../service/kpi.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-danger-card',
  imports: [CommonModule],
  templateUrl: './danger-card.component.html',
  styleUrls: ['./danger-card.component.css']
})
export class DangerCardComponent implements OnInit {
  rentalRevenue: number = 0;
  resellRevenue: number = 0;
  totalRevenue: number = 0;

  //constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
    const rentalRevenueValue = localStorage.getItem('revRental');
    this.rentalRevenue = rentalRevenueValue ? JSON.parse(rentalRevenueValue) : 0;
    const resellRevenueValue = localStorage.getItem('revResell');
    this.resellRevenue = resellRevenueValue ? JSON.parse(resellRevenueValue) : 0;
    this.totalRevenue = this.rentalRevenue + this.resellRevenue;
  }
}
