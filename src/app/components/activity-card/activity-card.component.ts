import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'activity-card',
  imports: [CommonModule],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.css',
})
export class ActivityCardComponent {

  @Input() activity!: any

  constructor(
    private router: Router
  ) { }

  onAction() {
    switch (this.activity.type) {
      case 'quiz':
        this.router.navigate([`content/quiz/play/${this.activity.contentId}`])
        break;
    }
  }
}
