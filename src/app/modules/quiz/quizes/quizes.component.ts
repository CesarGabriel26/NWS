import { Component, OnInit, signal } from '@angular/core';
import { LessonsService } from '../../../services/lessons.service';
import { ActivityCardComponent } from '../../../components/activity-card/activity-card.component';
import { Quiz } from '../../../models/engines/quiz';
import { Activity } from '../../../models/lesson';

@Component({
  selector: 'app-quizes.component',
  imports: [ActivityCardComponent],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.css',
})
export class QuizesComponent implements OnInit {
  quizes = signal<Activity[]>([])

  constructor(
    private lessonsService: LessonsService
  ) { }

  ngOnInit(): void {
    this.quizes.set(
      this.lessonsService.getAllContents().filter(c => c.contentType == 'quiz')
    )
  }
}
