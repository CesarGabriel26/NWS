import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Activity, Lesson } from '../../models/lesson';

@Component({
  selector: 'activity-card',
  imports: [CommonModule],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.css',
})
export class ActivityCardComponent {

  @Input() activity!: Activity | Lesson

  constructor(
    private router: Router
  ) { }

  onAction() {
    const a = (this.activity as any)
    
    if(!a.contentType) return
      
    switch (a.contentType) {
      case 'quiz':
        console.log('a');
        
        this.router.navigate([`content/quiz/play/${a.contentId}`])
        break;
    }
  }
}
