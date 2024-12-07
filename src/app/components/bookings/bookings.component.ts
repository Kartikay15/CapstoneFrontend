import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { KpiService } from '../../service/kpi.service'; // Import KpiService

@Component({
  selector: 'app-bookings',
  imports: [ChartModule],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  data: any;
  options: any;

  // Inject KpiService into the constructor
  constructor(private kpiService: KpiService) {}

  // Fetch KPIs and update the chart data
  fetchKpis(): void {
    this.kpiService.getKpis().subscribe({
      next: (data) => {
        // Get hiredBookings and cancelBookings for December
        const hiredBookings = data.find((kpi: any) => kpi.name === 'hiredBookings')?.value || 0;
        const cancelBookings = data.find((kpi: any) => kpi.name === 'cancelBookings')?.value || 0;

        // Update the chart data for December
        this.updateChartData(hiredBookings, cancelBookings);
      },
      error: (err) => {
        console.error('Error fetching KPIs:', err);
      },
    });
  }

  updateChartData(hiredBookings: number, cancelBookings: number): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    // Update the chart data dynamically with the fetched KPI values
    this.data = {
      labels: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          type: 'bar',
          label: 'Hired',
          backgroundColor: '#4E79A7', // Professional blue
          data: [0, 0, 0, 0, 0, 0, hiredBookings] // Use the fetched value for December
        },
        {
          type: 'bar',
          label: 'Cancelled',
          backgroundColor: '#E15759', // Subtle red
          data: [0, 0, 0, 0, 0, 0, cancelBookings] // Use the fetched value for December
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false
        },
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }

  ngOnInit() {
    // Fetch KPIs when the component is initialized
    this.fetchKpis();
  }
}
