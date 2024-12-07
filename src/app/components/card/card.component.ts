import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
// Adjust the path as per your project structure

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  totalActiveUsers: number = 0;
  rentalPlatformUsers: number = 0;
  resellPlatformUsers: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Fetch the roles data and compute values
    this.userService.initializeRolesData();
    setTimeout(() => {
      const roles = this.userService.getRolesData();

      // Compute totals based on roles
      const buyers = roles['BUYER'] || 0;
      const sellers = roles['SELLER'] || 0;
      const renters = roles['RENTER'] || 0;
      const lessors = roles['LESSOR'] || 0;

      this.totalActiveUsers = buyers + sellers + renters + lessors;
      this.rentalPlatformUsers = renters + lessors;
      this.resellPlatformUsers = buyers + sellers;
    }, 500); // Delay to allow the API call to complete
  }
}
