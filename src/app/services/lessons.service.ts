import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  // constructor(
  //   private quizesService: QuizesService
  // ) { }

  // getDashboard(): DashboardData {
  //   const activityCards = this.getActivityCards();
  //   const featured = activityCards.find((activity) => activity.id === 'math-blocks') ?? activityCards[0];

  //   if (!featured) {
  //     throw new Error('Nenhuma atividade cadastrada.');
  //   }

  //   const accuracy = this.getAccuracy(user);

  //   return {
  //     user,
  //     accuracy,
  //     stats: [
  //       {
  //         label: 'XP acumulado',
  //         value: user.progress.xp.toLocaleString('pt-BR'),
  //         icon: 'bolt',
  //         tone: 'bg-amber-50 text-amber-700',
  //       },
  //       {
  //         label: 'Precisao',
  //         value: `${accuracy}%`,
  //         icon: 'target',
  //         tone: 'bg-emerald-50 text-emerald-700',
  //       },
  //       {
  //         label: 'Quizzes feitos',
  //         value: `${user.progress.quizzesCompleted}`,
  //         icon: 'quiz',
  //         tone: 'bg-violet-50 text-violet-700',
  //       },
  //       {
  //         label: 'Jogos concluidos',
  //         value: `${user.progress.gamesCompleted}`,
  //         icon: 'sports_esports',
  //         tone: 'bg-sky-50 text-sky-700',
  //       },
  //     ],
  //     subjects: this.getSubjectSummaries(activityCards),
  //     featured,
  //     continueActivities: activityCards
  //       .filter((activity) => !activity.completed)
  //       .sort((current, next) => (next.progress || 0) - (current.progress || 0))
  //       .slice(0, 4),
  //     quizActivities: activityCards.filter((activity) => activity.type === 'quiz'),
  //     gameActivities: activityCards.filter((activity) => activity.type === 'game'),
  //   };
  // }

  // getAll(): Activity[] {
  //   return activities.map((activity) => {

  //     switch (activity.engine) {
  //       case 'quiz':
  //         const { xp, duration } = this.quizesService.getSummary(activity.contentId)
  //         activity.xp = xp;
  //         activity.durationMinutes = duration;
  //         activity.progress = 0;
  //         break;
  //       case 'reader':
  //         readings
  //         break;
  //     }

  //     return activity
  //   })
  // }

  // getAllBySubject(subjectId: string): Activity[] {
  //   return activities.filter(a => a.subjectId === subjectId).map((activity) => {

  //     switch (activity.engine) {
  //       case 'quiz':
  //         const { xp, duration } = this.quizesService.getSummary(activity.contentId)
  //         activity.xp = xp;
  //         activity.durationMinutes = duration;
  //         activity.progress = 0;
  //         break;
  //     }

  //     return activity
  //   })
  // }

  // getActivityCards(bySubject: boolean = false, subjectId?: string): ActivityCard[] {

  //   const list = bySubject? this.getAllBySubject(subjectId!) : this.getAll()

  //   return list.map((activity) => {
  //     const subject = subjects.find((currentSubject) => currentSubject.id === activity.subjectId);

  //     if (!subject) {
  //       throw new Error(`Materia nao encontrada para a atividade ${activity.id}.`);
  //     }

  //     return {
  //       ...activity,
  //       subject,
  //       presentation: activityPresentation[activity.type],
  //     };
  //   });
  // }

  // private getSubjectSummaries(activityCards: ActivityCard[]): SubjectSummary[] {
  //   return subjects.map((subject) => {
  //     const subjectActivities = activityCards.filter((activity) => activity.subjectId === subject.id);
  //     const nextActivityTitle =
  //       subjectActivities.find((activity) => !activity.completed)?.title ?? 'Tudo revisado';

  //     return {
  //       ...subject,
  //       progress: 0,
  //       activityCount: subjectActivities.length,
  //       lessonCount: subjectActivities.filter((activity) => activity.type === 'lesson').length,
  //       quizCount: subjectActivities.filter((activity) => activity.type === 'quiz').length,
  //       gameCount: subjectActivities.filter((activity) => activity.type === 'game').length,
  //       nextActivityTitle,
  //     };
  //   });
  // }

  // private getAccuracy(currentUser: User): number {
  //   if (currentUser.progress.totalAnswers === 0) {
  //     return 0;
  //   }

  //   return Math.round(
  //     (currentUser.progress.correctAnswers / currentUser.progress.totalAnswers) * 100
  //   );
  // }
}
