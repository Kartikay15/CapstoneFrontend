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
    rm0: number = 0;
    rm1: number = 0;
    rm2: number = 0;
    rm3: number = 0;
    rm4: number = 0;
    rm5: number = 0;
    rm6: number = 0;
    rrm0: number = 0;
    rrm1: number = 0;
    rrm2: number = 0;
    rrm3: number = 0;
    rrm4: number = 0;
    rrm5: number = 0;
    rrm6: number = 0;
    data: any;
    options: any;

    constructor(private kpiService: KpiService) {}

    // Fetch KPIs and extract revenue details

    months = this.getLastSevenMonths();
    fetchKpis(): void {
        this.rentalRevenue = JSON.parse(localStorage.getItem('revRental') || '0');
                this.resellRevenue = JSON.parse(localStorage.getItem('revResell') || '0');
                this.rm0 = JSON.parse(localStorage.getItem('rm0') || '0');
                this.rm1 = JSON.parse(localStorage.getItem('rm1') || '0');
                this.rm2 = JSON.parse(localStorage.getItem('rm2') || '0');
                this.rm3 = JSON.parse(localStorage.getItem('rm3') || '0');
                this.rm4 = JSON.parse(localStorage.getItem('rm4') || '0');
                this.rm5 = JSON.parse(localStorage.getItem('rm5') || '0');
                this.rm6 = JSON.parse(localStorage.getItem('rm6') || '0');
                this.rrm0 = JSON.parse(localStorage.getItem('rrm0') || '0');
                this.rrm1 = JSON.parse(localStorage.getItem('rrm1') || '0');
                this.rrm2 = JSON.parse(localStorage.getItem('rrm2') || '0');
                this.rrm3 = JSON.parse(localStorage.getItem('rrm3') || '0');
                this.rrm4 = JSON.parse(localStorage.getItem('rrm4') || '0');
                this.rrm5 = JSON.parse(localStorage.getItem('rrm5') || '0');
                this.rrm6 = JSON.parse(localStorage.getItem('rrm6') || '0');

                // Update chart data after fetching KPIs
                this.updateChartData();
    }

    getLastSevenMonths(): string[] {
        const monthNames = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const currentDate = new Date();
        const result = [];
      
        for (let i = 6; i >= 0; i--) {
          const date = new Date();
          date.setMonth(currentDate.getMonth() - i);
          result.push(`${monthNames[date.getMonth()]}`);
        }
      
        return result;
      }
      

    updateChartData(): void {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            labels:this.months,
            datasets: [
                {
                    type: 'bar',
                    label: 'Revenue Rental',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [this.rm6, this.rm5, this.rm4, this.rm3, this.rm2, this.rm1, this.rm0]  // Data is now dynamic based on fetched values
                },
                {
                    type: 'bar',
                    label: 'Revenue Resell',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [this.rrm6, this.rrm5, this.rrm4, this.rrm3, this.rrm2, this.rrm1, this.rrm0]  // Data is now dynamic based on fetched values
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
