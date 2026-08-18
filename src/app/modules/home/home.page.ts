import { Component, inject, OnInit, signal } from '@angular/core';
import { LessonsService } from '../../services/lessons.service';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from '../../components/activity-card/activity-card.component';
import { SubjectService } from '../../services/subjects.service';
import { Subject } from '../../models/subject';
import { Lesson, Activity } from '../../models/lesson';

@Component({
  selector: 'app-home.page',
  imports: [CommonModule, ActivityCardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage implements OnInit {
  subjects = signal<Subject[]>([]);
  
  lessons = signal<Lesson[]>([]);
  activities = signal<Activity[]>([]);

  constructor(
    private subjectService: SubjectService,
    private lessonService: LessonsService
  ) { }

  ngOnInit(): void {
    const s = this.subjectService.getAll()
    this.subjects.set(s)

    const l = this.lessonService.getAll();
    this.lessons.set(l);

    const lc = this.lessonService.getAllContents();
    this.activities.set(lc)
  }
}
