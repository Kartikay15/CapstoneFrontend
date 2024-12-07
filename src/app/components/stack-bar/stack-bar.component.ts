import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { KpiService } from '../../service/kpi.service';

@Component({
  selector: 'app-stack-bar',
  imports: [ChartModule],
  templateUrl: './stack-bar.component.html',
  styleUrls: ['./stack-bar.component.css']
})
export class StackBarComponent {
    rentalRevenue: number = 0;
    resellRevenue: number = 0;
    data: any;
    options: any;

    constructor(private kpiService: KpiService) {}

    // Fetch KPIs and extract revenue details
    fetchKpis(): void {
        this.rentalRevenue = JSON.parse(localStorage.getItem('revRental') || '0');
                this.resellRevenue = JSON.parse(localStorage.getItem('revResell') || '0');

                // Update chart data after fetching KPIs
                this.updateChartData();
    }

    updateChartData(): void {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            labels: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Revenue Rental',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [0, 0, 0, 0, 0, 0, this.rentalRevenue]  // Data is now dynamic based on fetched values
                },
                {
                    type: 'bar',
                    label: 'Revenue Resell',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [0, 0, 0, 0, 0, 0, this.resellRevenue]  // Data is now dynamic based on fetched values
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
        this.fetchKpis();
    }
}
