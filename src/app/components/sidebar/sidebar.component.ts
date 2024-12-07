import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router) {}
    logout(){
      alert("You have successfully logged out"); 
      
      setTimeout(() => {
        localStorage.clear();
        this.router.navigateByUrl('login');
      }, 2000);
    }
}
