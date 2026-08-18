// import { Subject } from "./subject";

import { Common } from "./common";
import { Question } from "./common/question";

// export type ActivityType =
//   | 'lesson'
//   | 'video'
//   | 'reading'
//   | 'quiz'
//   | 'game';

// export type ActivityDifficulty =
//   | 'easy'
//   | 'medium'
//   | 'hard';

// export type ActivityEngine =
//   'youtube-video'
//   | 'reader'
//   | 'quiz'
//   | 'math-blocks'
//   | 'timeline-runner'
//   | 'lab-match';

// export interface Activity {
//   id: string;

//   title: string;
//   description: string;

//   type: ActivityType;
//   engine: ActivityEngine;

//   subjectId: string;
//   topic: string;

//   /**
//    * Identifica o conteúdo que será executado
//    * pelo engine.
//    */
//   contentId: string;
//   difficulty?: ActivityDifficulty;

//   // populated
//   xp?: number;
//   durationMinutes?: number;
//   progress?: number;
//   completed?: boolean;
// }


// export interface ActivityPresentation {
//   label: string;
//   icon: string;
//   action: string;
//   badge: string;
//   border: string;
//   progress: string;
//   button: string;
// }

// export interface ActivityCard extends Activity {
//   subject: Subject;
//   presentation: ActivityPresentation;
// }


export interface Activity extends Common {
  questions: Question[];
}