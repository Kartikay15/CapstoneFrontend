import { Component } from '@angular/core';
import { EvaluationService } from '../../service/evaluation.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-evaluations',
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent {
  evaluations: any[] = [];
  selectedCar: any = null;  // Store selected car details for viewing
  carDetailsVisible: boolean = false;  // Control the visibility of the car details modal

  constructor(private evaluationService: EvaluationService) {}

  ngOnInit(): void {
    this.evaluationService.getAllEvaluation().subscribe({
      next: (data) => {
        console.log(data);
        this.evaluations = data;
      },
      error: (err) => {
        console.error('Failed to fetch evaluations', err);
      }
    });
  }

  // Handle assigning an evaluation to an expert
  assignEvaluation(evaluation: any): void {
    console.log('Evaluation Object:', evaluation); // Log the entire object for debugging
    console.log('Status:', evaluation.evalstatus); // Log the status field to verify its value
  
    if (evaluation.evalstatus === 'PENDING') {
      // Call the service method to update the evaluation status
      this.evaluationService.updateEvaluationStatus(evaluation.id, 'PROCESSING').subscribe({
        next: () => {
          // Update the status locally after the successful update
          evaluation.evalstatus = 'PROCESSING';
          alert(`Evaluation ${evaluation.id} has been updated to PROCESSING.`);
        },
        error: (err) => {
          console.error('Failed to assign evaluation:', err);
          alert('Error occurred while assigning the evaluation.');
        }
      });
    } else {
      alert(`Evaluation status is not PENDING. Current status: ${evaluation.evalstatus}`);
    }
  }
  

  // Show car details in a modal
  viewCarDetails(car: any): void {
    this.selectedCar = car;
    this.carDetailsVisible = true;
  }

  // Close the car details modal
  closeCarDetails(): void {
    this.selectedCar = null;
    this.carDetailsVisible = false;
  }
}
