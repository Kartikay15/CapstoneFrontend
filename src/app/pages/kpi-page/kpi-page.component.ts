import { Component } from '@angular/core';
import { StackBarComponent } from "../../components/stack-bar/stack-bar.component";
import { KpiDoughnoutCardComponent } from '../../components/kpi-doughnout-card/kpi-doughnout-card.component';
import { KpiTobbarComponent } from "../../components/kpi-tobbar/kpi-tobbar.component";
import { SmallDoughnutComponent } from "../../components/small-doughnut/small-doughnut.component";
import { BookingsComponent } from "../../components/bookings/bookings.component";

@Component({
  selector: 'app-kpi-page',
  imports: [StackBarComponent, KpiDoughnoutCardComponent, KpiTobbarComponent, SmallDoughnutComponent, BookingsComponent],
  templateUrl: './kpi-page.component.html',
  styleUrl: './kpi-page.component.css'
})
export class KpiPageComponent {

}
