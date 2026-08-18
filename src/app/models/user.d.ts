import { UserProgress } from './user-progress';

export interface User {
  id: string;
  name: string;
  avatar: string;
  progress: UserProgress;
}

export interface UserProgress {
  level: number;
  xp: number;
  xpNeeded: number;
}
