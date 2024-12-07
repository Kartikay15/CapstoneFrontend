import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashLineChartComponent } from '../dash-line-chart/dash-line-chart.component';
import { Card } from 'primeng/card';
import { SuccessCardComponent } from '../success-card/success-card.component';
import { WarningCardComponent } from '../warning-card/warning-card.component';
import { DangerCardComponent } from '../danger-card/danger-card.component';
import { CardComponent } from '../card/card.component';
import { DashdonutComponent } from "../dashdonut/dashdonut.component";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, DashLineChartComponent, CardComponent, SuccessCardComponent, WarningCardComponent, DangerCardComponent, DashdonutComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
