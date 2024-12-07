import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name: string = 'Guest'; // Default value

  ngOnInit(): void {
    // Fetch the user's name from localStorage
    const storedName = localStorage.getItem('name');
    if (storedName) {
      this.name = storedName;
    }
  }
}
