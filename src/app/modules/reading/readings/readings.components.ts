import { Component, signal } from '@angular/core';
import { LessonsService } from '../../../services/lessons.service';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from '../../../components/activity-card/activity-card.component';
import { Reading } from '../../../models/reading';

@Component({
  selector: 'app-readings.components',
  imports: [CommonModule, ActivityCardComponent],
  templateUrl: './readings.components.html',
  styleUrl: './readings.components.css',
})
export class ReadingsComponents {
  readings = signal<Reading[]>([])

  constructor(
    private lessonsService: LessonsService
  ) { }

  ngOnInit(): void {
    this.readings.set(
      [] //this.lessonsService.getActivityCards().filter(a => a.type == 'reading')
    )
  }
}
