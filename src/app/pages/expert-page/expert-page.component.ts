import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SidebarExpertComponent } from "../../components/sidebar-expert/sidebar-expert.component";
import { RouterOutlet } from '@angular/router';
import { ExpertComponent } from "../../components/expert/expert.component";

@Component({
  selector: 'app-expert-page',
  imports: [HeaderComponent, SidebarExpertComponent, RouterOutlet, ExpertComponent],
  templateUrl: './expert-page.component.html',
  styleUrl: './expert-page.component.css'
})
export class ExpertPageComponent {

}
