import { Component, OnInit } from '@angular/core';
import { NgIf, NgClass, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvaluationService } from '../../service/evaluation.service';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css'],
  standalone: true,
  imports: [NgIf, FormsModule, NgForOf],
})
export class ExpertComponent implements OnInit {
  evaluations: any[] = [];
  selectedCar: any; // Declare the selectedCar property

  constructor(private evaluationService: EvaluationService) {}

  ngOnInit(): void {
    this.getEvaluations();
  }

  // Fetch evaluations with "PROCESSING" status
  getEvaluations(): void {
    this.evaluationService.getAllEvaluation().subscribe({
      next: (data) => {
        this.evaluations = data.filter((evaluation: any) => evaluation.evalstatus === 'PROCESSING');
      },
      error: (err) => {
        console.error('Error fetching evaluations:', err);
      },
    });
  }

  // Set the selected car for modal display
  viewCarDetails(car: any): void {
    this.selectedCar = car;
    // Now the modal or page section will display the details of this car
  }

  // Method to update the verdict of an evaluation
  updateEvaluation(evaluation: any): void {
    const updatedVerdict = evaluation.evalVerdict; // The selected verdict
    const evaluationId = evaluation.id; // The evaluation ID
    const evalStatus = 'DONE'; // Status is set to DONE
  
    // Call the service to update both status and verdict
    this.evaluationService.updateStatusAndVerdict(evaluationId, evalStatus, updatedVerdict).subscribe({
      next: (updatedEvaluation) => {
        console.log('Evaluation updated:', updatedEvaluation);
        // Refresh the evaluations list after update
        this.getEvaluations();
      },
      error: (err) => {
        console.error('Error updating evaluation:', err);
      }
    });
  }

  // Method to reset the car details display
  resetCarDetails(): void {
    this.selectedCar = null;
  }
}
