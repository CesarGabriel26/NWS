import { Component, OnInit, signal } from '@angular/core';
import { LessonsService } from '../../../services/lessons.service';
import { ActivityCardComponent } from '../../../components/activity-card/activity-card.component';
import { Quiz } from '../../../models/engines/quiz';

@Component({
  selector: 'app-quizes.component',
  imports: [ActivityCardComponent],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.css',
})
export class QuizesComponent implements OnInit {
  quizes = signal<Quiz[]>([])

  constructor(
    private lessonsService: LessonsService
  ) { }

  ngOnInit(): void {
    this.quizes.set(
      [] //this.lessonsService.getActivityCards().filter(a => a.type == 'quiz')
    )
  }
}
