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

  constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
    this.fetchKpis();
  }

  // Fetch KPIs and extract revenue details
  fetchKpis(): void {
    this.kpiService.getKpis().subscribe({
      next: (data) => {
        this.rentalRevenue = data.find((kpi: any) => kpi.name === 'revRental')?.value || 0;
        this.resellRevenue = data.find((kpi: any) => kpi.name === 'revResell')?.value || 0;
        this.totalRevenue = this.rentalRevenue + this.resellRevenue;
        console.log(this.rentalRevenue, this.resellRevenue, this.totalRevenue);
      },
      error: (err) => {
        console.error('Error fetching KPIs:', err);
      },
    });
  }
}
