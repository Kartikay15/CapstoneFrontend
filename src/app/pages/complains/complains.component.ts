import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ComplainsService } from '../../service/complains.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-complains',
  imports: [NgClass, NgFor, NgIf, FormsModule],
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.css'],
})
export class ComplainsComponent implements OnInit {
  complains: any[] = []; // All complaints fetched from the server
  filteredComplains: any[] = []; // Complaints filtered based on selected status

  // Filter options
  filterOptions = {
    all: true,
    unadressed: false,
    resolved: false,
  };

  constructor(private complainsService: ComplainsService) {}

  ngOnInit(): void {
    this.complainsService.getAllComplaints().subscribe({
      next: (response) => {
        this.complains = response;
        this.filteredComplains = [...this.complains]; // Initialize with all complaints
        console.log('Fetched Complaints:', this.complains);
      },
      error: (error) => {
        console.error('Error loading complaints', error);
      },
    });
  }

  resolveComplain(index: number): void {
    const complaintId = this.filteredComplains[index].id;
    this.complainsService.changeStatus(complaintId, 'RESOLVED').subscribe({
      next: (response) => {
        console.log('Resolved complaint status:', response);

        // Update the main array and filtered array
        const originalIndex = this.complains.findIndex(
          (item) => item.id === complaintId
        );
        if (originalIndex > -1) {
          this.complains[originalIndex].complainStatus = 'RESOLVED';
        }
        this.filteredComplains[index].complainStatus = 'RESOLVED';
      },
      error: (error) => console.error('Error resolving complaint:', error),
    });
  }

  applyFilter(): void {
    const { all, unadressed, resolved } = this.filterOptions;

    // Reset filtered complaints based on selected filters
    if (all) {
      this.filteredComplains = [...this.complains];
    } else {
      this.filteredComplains = this.complains.filter((complain) => {
        if (unadressed && complain.complainStatus === 'UNADRESSED') {
          return true;
        }
        if (resolved && complain.complainStatus === 'RESOLVED') {
          return true;
        }
        return false;
      });
    }
  }
}
