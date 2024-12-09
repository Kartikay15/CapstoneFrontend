import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { KpiService } from '../../service/kpi.service'; // Import KpiService

@Component({
  selector: 'app-bookings',
  imports: [ChartModule],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  data: any;
  options: any;
//   bh0: number = 0;
//   bh1: number = 0;
//   bh2: number = 0;
//   bh3: number = 0;
//   bh4: number = 0;
//   bh5: number = 0;
//   bh6: number = 0;
//   bc0: number = 0;
//   bc1: number = 0;
//   bc2: number = 0;
//   bc3: number = 0;
//   bc4: number = 0;
//   bc5: number = 0;
//   bc6: number = 0;
  month = this.getLastSevenMonths();
  fetchKpis(): void {
   
        const hiredBookings = JSON.parse(localStorage.getItem('hiredBookings') || '0');
        const cancelBookings = JSON.parse(localStorage.getItem('cancelBookings') || '0');
        const bh0 = JSON.parse(localStorage.getItem('bh0') || '0');
        const bh1 = JSON.parse(localStorage.getItem('bh1') || '0');
        const bh2 = JSON.parse(localStorage.getItem('bh2') || '0');
        const bh3 = JSON.parse(localStorage.getItem('bh3') || '0');
        const bh4 = JSON.parse(localStorage.getItem('bh4') || '0');
        const bh5 = JSON.parse(localStorage.getItem('bh5') || '0');
        const bh6 = JSON.parse(localStorage.getItem('bh6') || '0');
        const bc0 = JSON.parse(localStorage.getItem('bc0') || '0');
        const bc1 = JSON.parse(localStorage.getItem('bc1') || '0');
        const bc2 = JSON.parse(localStorage.getItem('bc2') || '0');
        const bc3 = JSON.parse(localStorage.getItem('bc3') || '0');
        const bc4 = JSON.parse(localStorage.getItem('bc4') || '0');
        const bc5 = JSON.parse(localStorage.getItem('bc5') || '0');
        const bc6 = JSON.parse(localStorage.getItem('bc6') || '0');
        

        // Update the chart data for December
        this.updateChartData(bh0, bc0,bh1, bc1,bh2, bc2,bh3, bc3,bh4, bc4,bh5, bc5,bh6, bc6);
     
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
  

  updateChartData(bh0: number, bc0: number,bh1: number, bc1: number,bh2: number, bc2: number,bh3: number, bc3: number,bh4: number, bc4: number,bh5: number, bc5: number,bh6: number, bc6: number): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    
    this.data = {
      labels: this.month,
      datasets: [
        {
          type: 'bar',
          label: 'Hired',
          backgroundColor: '#4E79A7', 
          data: [bh6, bh5, bh4, bh3, bh2, bh1, bh0] 
        },
        {
          type: 'bar',
          label: 'Cancelled',
          backgroundColor: '#E15759', 
          data: [bc6, bc5, bc4, bc3, bc2, bc1, bc0] 
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
    // fetches on initialization of component so i will need kpi's to update in local storage before this component loads
    this.fetchKpis();
  }
}
