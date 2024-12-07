import { Component } from '@angular/core';
import { KpiService } from '../../service/kpi.service';

@Component({
  selector: 'app-success-card',
  imports: [],
  templateUrl: './success-card.component.html',
  styleUrl: './success-card.component.css'
})
export class SuccessCardComponent {
  cancelledBookings: number = 0;
  hiredBookings: number = 0;
  total: number = 0;

  //constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
    //this.fetchKpis();
    //const rentalRevenueValue = localStorage.getItem('revRental');
    //this.rentalRevenue = rentalRevenueValue ? JSON.parse(rentalRevenueValue) : 0;
    this.cancelledBookings = JSON.parse(localStorage.getItem('cancelBookings') || '0');
    this.hiredBookings = JSON.parse(localStorage.getItem('hiredBookings') || '0');
    this.total = this.cancelledBookings + this.hiredBookings;
  }

  // Fetch KPIs and extract revenue details
  // fetchKpis(): void {
  //   this.kpiService.getKpis().subscribe({
  //     next: (data) => {
  //       this.cancelledBookings = data.find((kpi: any) => kpi.name === 'cancelBookings')?.value || 0;
  //       this.hiredBookings = data.find((kpi: any) => kpi.name === 'hiredBookings')?.value || 0;
  //       this.total = this.cancelledBookings + this.hiredBookings;
  //       //console.log(this.rentalRevenue, this.resellRevenue, this.totalRevenue);
  //     },
  //     error: (err) => {
  //       console.error('Error fetching KPIs:', err);
  //     },
  //   });
  // }
}
