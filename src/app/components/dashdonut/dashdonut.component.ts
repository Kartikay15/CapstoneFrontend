import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { KpiService } from '../../service/kpi.service';

@Component({
  selector: 'app-dashdonut',
  imports: [ChartModule],
  templateUrl: './dashdonut.component.html',
  styleUrls: ['./dashdonut.component.css']
})
export class DashdonutComponent implements OnInit {
  cancelledBookings: number = 0;
  hiredBookings: number = 0;
  revRental: number = 0;
  revResell: number = 0;

  data: any;
  options: any;
  data2:any;
  options2:any;

  constructor(private kpiService: KpiService) {}

  ngOnInit() {
    this.fetchKpis(); // Fetch KPI values
    this.initializeChartOptions(); // Set static chart options
  }

  // Fetch KPIs and update chart data dynamically
  fetchKpis(): void {
    this.cancelledBookings =
          JSON.parse(localStorage.getItem('cancelBookings') || '0');
        this.hiredBookings =
          JSON.parse(localStorage.getItem('hiredBookings') || '0');
          this.revRental =
          JSON.parse(localStorage.getItem('revRental') || '0');
          this.revResell =
          JSON.parse(localStorage.getItem('revResell') || '0');
        // Update the chart data dynamically
        this.updateChartData();
  }

  // Initialize chart options
  initializeChartOptions(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          display: true,
          labels: {
            color: textColor
          }
        }
      }
    };
  }

  // Update chart data dynamically
  updateChartData(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    this.data = {
      labels: ['Hired', 'Cancelled'],
      datasets: [
        {
          data: [this.hiredBookings, this.cancelledBookings],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400')
          ]
        }
      ]
    };
    this.data2 = {
      labels: ['Rental Revenue', 'Resell Revenue'],
      datasets: [
        {
          data: [this.revRental, this.revResell],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400')
          ]
        }
      ]
    };
  }
}
