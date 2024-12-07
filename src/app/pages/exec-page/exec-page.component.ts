import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';


@Component({
  selector: 'app-exec-page',
  imports: [HeaderComponent, SidebarComponent, RouterOutlet],
  templateUrl: './exec-page.component.html',
  styleUrl: './exec-page.component.css'
})
export class ExecPageComponent {

}
