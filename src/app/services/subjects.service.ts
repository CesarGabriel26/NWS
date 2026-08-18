import { Injectable } from '@angular/core';
import { subjects } from '../../data/subjects';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  getAll(): Subject[] {
    return subjects.map(s => ({...s, activityCount: 0, progress: 0}))
  }
}
