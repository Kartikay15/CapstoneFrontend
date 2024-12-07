import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterOutlet } from '@angular/router';
import { AdminSidebarComponent } from "../../components/admin-sidebar/admin-sidebar.component";
import { AdminExecutiveOnboardComponent } from '../../components/admin-executive-onboard/admin-executive-onboard.component';

@Component({
  selector: 'app-admin-page',
  imports: [HeaderComponent, RouterOutlet, AdminSidebarComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}
