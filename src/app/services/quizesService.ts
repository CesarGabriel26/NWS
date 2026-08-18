import { Injectable } from '@angular/core';
import { Quiz } from '../models/engines/quiz';
import { Quizes } from '../../data/quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizesService {
  getAll(): Quiz[] {
    return []
  }

  getSummary(id: string): { xp: number, duration: number } {
    var item = this.get(id)

    if (!item) return { xp: 0, duration: 0 }

    let xp = 0
    let durationInSeconds = 0

    item.questions.forEach(q => {
      durationInSeconds += (q.timeLimit || item?.settings.defaultTimeLimit || 0)

      if (q.rewards) {
        q.rewards.forEach(qr => {
          xp += (qr.xpAmount || 0)
        })
      }

      if (item?.settings.defaultRewards) {
        const xpReward = item?.settings.defaultRewards.find(df => df.applyOn == 'auto' && df.type == 'xp')
        if (xpReward){
          xp += (xpReward.xpAmount || 0)
        }
      }
    })

    return { xp, duration: durationInSeconds / 60 }
  }

  get(id: string): Quiz | null {
    var items = Quizes.filter(q => q.id == id)

    if (items.length < 1) {
      return null
    }

    return items[0]
  }
}
