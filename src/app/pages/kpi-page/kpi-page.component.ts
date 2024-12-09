import { Component, OnInit } from '@angular/core';
import { StackBarComponent } from "../../components/stack-bar/stack-bar.component";
import { KpiDoughnoutCardComponent } from '../../components/kpi-doughnout-card/kpi-doughnout-card.component';
import { KpiTobbarComponent } from "../../components/kpi-tobbar/kpi-tobbar.component";
import { SmallDoughnutComponent } from "../../components/small-doughnut/small-doughnut.component";
import { BookingsComponent } from "../../components/bookings/bookings.component";
import { KpiService } from '../../service/kpi.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-kpi-page',
  imports: [StackBarComponent, KpiDoughnoutCardComponent, KpiTobbarComponent, BookingsComponent, NgIf],
  templateUrl: './kpi-page.component.html',
  styleUrl: './kpi-page.component.css'
})
export class KpiPageComponent implements OnInit {

  kpiDataLoaded = false; // Track if KPI data has finished loading

  constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
    this.fetchKpis();
  }

  fetchKpis(): void {
    this.kpiService.getKpisForceRefresh().subscribe({
      next: (data) => {
        console.log('KPIs successfully fetched');
        this.kpiDataLoaded = true; // Set flag to true once data is ready
      },
      error: (err) => {
        console.error('Error fetching KPIs:', err);
      },
    });
  }
}
