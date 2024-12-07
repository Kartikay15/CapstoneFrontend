import { Component, OnInit } from '@angular/core';
import { ComplainsService } from '../../service/complains.service';
import { NgClass, NgFor } from '@angular/common';


@Component({
  selector: 'app-complains',
  imports: [NgClass, NgFor],
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.css'],
})
export class ComplainsComponent implements OnInit {
  complains: any[] = [];

  constructor(private complainsService: ComplainsService) {}

  ngOnInit(): void {
    this.fetchComplains();
  }

  fetchComplains(): void {
    this.complains = this.complainsService.getAllComplains();
  }

  resolveComplain(index: number): void {
    this.complains[index].status = 'RESOLVED';
  }

  unlistCar(index: number): void {
    // Implement logic to unlist the car 
    this.complains[index].status = 'RESOLVED';
  }
}
