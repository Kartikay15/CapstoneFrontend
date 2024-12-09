import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-expert',
  imports: [RouterLink],
  templateUrl: './sidebar-expert.component.html',
  styleUrl: './sidebar-expert.component.css'
})
export class SidebarExpertComponent {
  constructor(private router: Router) {}
    logout(){
        localStorage.clear();
        this.router.navigateByUrl('login');
    }
}
