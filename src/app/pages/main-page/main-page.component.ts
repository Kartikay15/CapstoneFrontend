import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "../../components/dashboard/dashboard.component";

@Component({
  selector: 'app-main-page',
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
