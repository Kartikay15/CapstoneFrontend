import { Component } from '@angular/core';
import { KpiService } from '../../service/kpi.service';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-small-doughnut-resell',
  imports: [ChartModule],
  templateUrl: './small-doughnut-resell.component.html',
  styleUrl: './small-doughnut-resell.component.css'
})
export class SmallDoughnutResellComponent {
  resellInventory: number = 0;
  carsSold: number = 0;
  listedCars: number = 0;

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
        
         this.resellInventory = data.find((kpi: any) => kpi.name === 'resellInventory')?.value || 0;
         this.carsSold = data.find((kpi: any) => kpi.name === 'carsSold')?.value || 0;
         this.listedCars = data.find((kpi: any) => kpi.name === 'listedCars')?.value || 0;
         console.log(this.resellInventory, this.carsSold, this.listedCars);
       
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
          data: [this.carsSold, this.listedCars, this.resellInventory],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-200')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-200')
          ]
        }
      ]
    };
  }
}