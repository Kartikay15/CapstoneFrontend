import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { KpiService } from '../../service/kpi.service';

@Component({
  selector: 'app-small-doughnut',
  imports: [ChartModule],
  templateUrl: './small-doughnut.component.html',
  styleUrl: './small-doughnut.component.css'
})
export class SmallDoughnutComponent {cancelledBookings: number = 0;
    rentalInventory: number = 0;
    carRentedOut: number = 0;
  
    data: any;
    options: any;
    
  
    constructor(private kpiService: KpiService) {}
  
    ngOnInit() {
      this.fetchKpis(); // Fetch KPI values
      this.initializeChartOptions(); // Set static chart options
    }
  
    // Fetch KPIs and update chart data dynamically
    fetchKpis(): void {
      this.kpiService.getKpis().subscribe({
        next: (data) => {
          
           this.rentalInventory = data.find((kpi: any) => kpi.name === 'rentalInventory')?.value || 0;
           this.carRentedOut = data.find((kpi: any) => kpi.name === 'carRentedOut')?.value || 0;
          
         
          this.updateChartData();
        },
        error: (err) => {
          console.error('Error fetching KPIs:', err);
        },
      });
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
        
        datasets: [
          {
            data: [this.carRentedOut, this.carRentedOut+this.rentalInventory],
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
