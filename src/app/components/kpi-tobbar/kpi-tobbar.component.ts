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

  constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
    this.fetchKpis();
  }

  // Fetch KPIs and extract revenue details
  fetchKpis(): void {
    this.kpiService.getKpis().subscribe({
      next: (data) => {
        this.totalRentals = data.find((kpi: any) => kpi.name === 'totalRentals')?.value || 0;
        this.carsRentedOut = data.find((kpi: any) => kpi.name === 'carRentedOut')?.value || 0;
        this.carsSold = data.find((kpi: any) => kpi.name === 'carsSold')?.value || 0;
        this.users = data.find((kpi: any) => kpi.name === 'users')?.value || 0;
        this.ratings = data.find((kpi: any) => kpi.name === 'ratings')?.value || 0;
      },
      error: (err) => {
        console.error('Error fetching KPIs:', err);
      },
    });
  }
}
