import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { XpLevelTrackerComponent } from '../../components/xp-level-tracker/xp-level-tracker.component';

interface NavigationItem {
  label: string;
  icon: string;
  route: string;
}


@Component({
  selector: 'app-main-container',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, XpLevelTrackerComponent],
  templateUrl: './main-container.html',
  styleUrl: './main-container.css',
})
export class MainContainer {
  readonly navigation: NavigationItem[] = [
    {
      label: 'Inicio',
      icon: 'dashboard',
      route: '/content',
    },
    {
      label: 'Trilhas',
      icon: 'category',
      route: 'study-paths',
    },
    {
      label: 'Quizzes',
      icon: 'quiz',
      route: 'quiz/list',
    },
    {
      label: 'Leituras',
      icon: 'menu_book',
      route: 'readings/list',
    },
    // {
    //   label: 'Mini jogos',
    //   icon: 'sports_esports',
    //   route: 'games-list',
    // },
  ];
}
