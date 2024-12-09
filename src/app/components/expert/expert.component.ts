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

  // get processing evals
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

  
  viewCarDetails(car: any): void {
    this.selectedCar = car;
   
  }

  // verdic update
  updateEvaluation(evaluation: any): void {
    const updatedVerdict = evaluation.evalVerdict; 
    const evaluationId = evaluation.id; 
    const evalStatus = 'DONE'; 
  
    
    this.evaluationService.updateStatusAndVerdict(evaluationId, evalStatus, updatedVerdict).subscribe({
      next: (updatedEvaluation) => {
        console.log('Evaluation updated:', updatedEvaluation);
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
