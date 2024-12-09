import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name: string = 'Guest'; 

  ngOnInit(): void {
    // user name exists in local storage
    const storedName = localStorage.getItem('name');
    if (storedName) {
      this.name = storedName;
    }
  }
}
