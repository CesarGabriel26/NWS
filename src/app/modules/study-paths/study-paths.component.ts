import { Component, OnInit } from '@angular/core';
import { subjects } from '../../services/subjects';
import { CommonModule } from '@angular/common';
import { LessonsService } from '../../services/lessons.service';
import { ActivityCardComponent } from '../../components/activity-card/activity-card.component';

@Component({
  selector: 'app-study-paths.component',
  imports: [CommonModule, ActivityCardComponent],
  templateUrl: './study-paths.component.html',
  styleUrl: './study-paths.component.css',
})
export class StudyPathsComponent {
  subjects = subjects

  constructor(
    private lessonsService: LessonsService
  ){}

  getLeassons(id:string){
    return [] //this.lessonsService.getActivityCards(true, id)
  }
}
