import { Component, inject } from '@angular/core';
import { LessonsService } from '../../services/lessons.service';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from '../../components/activity-card/activity-card.component';

@Component({
  selector: 'app-home.page',
  imports: [CommonModule, ActivityCardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {
  private readonly lessonsService = inject(LessonsService);

  readonly dashboard: any = {} //this.lessonsService.getDashboard();

  
}
