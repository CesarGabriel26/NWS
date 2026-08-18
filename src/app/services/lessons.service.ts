import { Injectable } from '@angular/core';
import { lessons } from '../../data/leasons';
import { Lesson, Activity } from '../models/lesson';
import { subjects } from '../../data/subjects';
import { presentations } from '../../data/styles';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {

  getAll(subjectId?: string): Lesson[] {

    let list = subjectId ? lessons.filter(l => l.subjectId === subjectId) : lessons

    list = list.map(i => {

      const subject = subjects.find(s => s.id === i.subjectId)

      return {
        ...i,
        subject: subject,
        presentation: presentations['lesson']
      }
    })

    return list
  }

  getAllContents(subject?: string): Activity[] {
    let contents: Activity[] = []

    const list = this.getAll(subject)

    for (const l of list) {
      l.content.forEach(i => {
        const subject = subjects.find(s => s.id === i.subjectId)


        contents.push({
          ...i,
          topics: l.topics,
          subjectId: l.subjectId,
          subject: subject,
          presentation: presentations[i.contentType]
        })
      })
    }

    return contents
  }

  getContent(id: string): Activity {
    let contents: Activity[] = []

    const list = this.getAll()

    for (const l of list) {
      l.content.forEach(i => {
        const subject = subjects.find(s => s.id === i.subjectId)
        contents.push({
          ...i,
          topics: l.topics,
          subjectId: l.subjectId,
          subject: subject,
          presentation: presentations[i.contentType]
        })
      })
    }

    return contents.find(c => c.id = id)!
  }
}
