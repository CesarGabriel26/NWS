import { Routes } from '@angular/router';
import { HomePage } from './modules/home/home.page';
import { MainContainer } from './modules/main-container/main-container';
import { QuizPlay } from './modules/quiz/quiz-play/quiz-play.component';
import { QuizesComponent } from './modules/quiz/quizes/quizes.component';
import { StudyPathsComponent } from './modules/study-paths/study-paths.component';
import { ReadingsComponents } from './modules/reading/readings/readings.components';
import { GamesListComponent } from './modules/game/games-list.component/games-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contet'
  },

  {
    path: 'content',
    component: MainContainer,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'study-paths',
        component: StudyPathsComponent,
      },

      {
        path: 'quiz',
        children: [
          {
            path: 'list',
            component: QuizesComponent,
          },
          {
            path: 'play/:id',
            component: QuizPlay,
          },
        ]
      },

      {
        path: 'readings',
        children: [
          {
            path: 'list',
            component: ReadingsComponents,
          },
          {
            path: 'read/:id',
            component: QuizPlay,
          }
        ]
      },

      {
        path: 'games-list',
        component: GamesListComponent,
      },
    ]
  },

  {
    path: '**',
    redirectTo: 'content',
  },
];
