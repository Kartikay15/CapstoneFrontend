import { Component } from '@angular/core';
import { SmallDoughnutComponent } from "../small-doughnut/small-doughnut.component";
import { KpiService } from '../../service/kpi.service';
import { SmallDoughnutResellComponent } from "../small-doughnut-resell/small-doughnut-resell.component";

@Component({
  selector: 'app-kpi-doughnout-card',
  imports: [SmallDoughnutComponent, SmallDoughnutResellComponent],
  templateUrl: './kpi-doughnout-card.component.html',
  styleUrl: './kpi-doughnout-card.component.css'
})
export class KpiDoughnoutCardComponent {
  rentalInventory: number = 0;
  carRentedOut: number = 0;
  percentage: number = 0;
  carsSold: number = 0;
  resellInventory: number = 0;
  listedCars: number = 0;
  percentage2: number = 0;

  constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
    this.fetchKpis();
  }

  // Fetch KPIs and extract revenue details
  fetchKpis(): void {
    this.kpiService.getKpis().subscribe({
      next: (data) => {
        
        this.rentalInventory = data.find((kpi: any) => kpi.name === 'rentalInventory')?.value || 0;
        this.carRentedOut = data.find((kpi: any) => kpi.name === 'carRentedOut')?.value || 0;
        this.carsSold = data.find((kpi: any) => kpi.name === 'carsSold')?.value || 0;
        this.listedCars = data.find((kpi: any) => kpi.name === 'listedCars')?.value || 0;
        this.resellInventory = data.find((kpi: any) => kpi.name === 'resellInventory')?.value || 0;
        this.percentage = Math.round((this.carRentedOut / (this.rentalInventory+this.carRentedOut) * 100 + Number.EPSILON) * 10) / 10;
        this.percentage2 = Math.round((this.carsSold / (this.resellInventory+this.carsSold+this.listedCars) * 100 + Number.EPSILON) * 10) / 10;
      },
      error: (err) => {
        console.error('Error fetching KPIs:', err);
      },
    });
  }
}
