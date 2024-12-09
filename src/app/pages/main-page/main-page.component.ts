import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { KpiService } from '../../service/kpi.service';

@Component({
  selector: 'app-main-page',
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {

  constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
    this.fetchKpis();
  }

  // refresh kpis on loading
  fetchKpis(): void {
    this.kpiService.getKpis().subscribe({
      next: (data) => {
        console.log('Got Data');
      },
      error: (err) => {
        console.error('Error fetching KPIs:', err);
      },
    });
  }

}
