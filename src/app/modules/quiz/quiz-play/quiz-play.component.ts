import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizesService } from '../../../services/quizesService';
import { CommonModule, Location } from '@angular/common';
import { SoundService } from '../../../services/sound.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { XpLevelTrackerComponent } from '../../../components/xp-level-tracker/xp-level-tracker.component';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'quiz-play',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, XpLevelTrackerComponent],
  templateUrl: './quiz-play.component.html',
  styleUrl: './quiz-play.component.css',
})
export class QuizPlay implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  // music = signal<string>('')
  // skipExplanation = signal<boolean>(false)
  // showExplanation = signal<boolean>(false)

  // interval = signal<ReturnType<typeof setInterval> | null>(null);

  // quiz = signal<Quiz>({} as Quiz);
  // result = signal<QuizResult>({} as QuizResult)
  // xpResult = signal<any>({})
  // currentTime = signal<number>(0);

  // session = signal<QuizSession>({
  //   quizId: '',
  //   currentQuestionIndex: 0,
  //   score: 0,
  //   correctAnswers: 0,
  //   wrongAnswers: 0,
  //   answers: [],
  //   startedAt: 0,
  //   finishedAt: 0,
  // });

  // settings = signal<QuizSettings>({});
  // questions = signal<QuizQuestion[]>([]);

  // answersDisabled = signal<boolean>(false);

  // currentQuestion = computed(() => {
  //   const questions = this.questions();
  //   const index = this.session().currentQuestionIndex;

  //   return questions[index] ?? null;
  // });

  // constructor(
  //   private location: Location,
  //   private userService: UserService,
  //   private activatedRoute: ActivatedRoute,
  //   private quizesService: QuizesService,
  //   private soundService: SoundService
  // ) { }

  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe(params => {
  //     const id = params['id'];

  //     const quiz = this.quizesService.get(id);

  //     if (!quiz) {
  //       return;
  //     }

  //     this.session.update(old => ({
  //       ...old,
  //       quizId: quiz.id
  //     }));

  //     this.quiz.set(quiz);
  //     this.settings.set(quiz.settings);
  //     this.questions.set(quiz.questions);
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.clearTimer();
  // }

  // // Adicione esta propriedade computed na classe QuizPlay:
  // formattedTimeSpent = computed(() => {
  //   const startedAt = this.session().startedAt;
  //   const finishedAt = this.session().finishedAt || 0;

  //   if (!startedAt || !finishedAt) return '00:00';

  //   const diffInSeconds = Math.max(0, Math.floor((finishedAt - startedAt) / 1000));

  //   const hours = Math.floor(diffInSeconds / 3600);
  //   const minutes = Math.floor((diffInSeconds % 3600) / 60);
  //   const seconds = diffInSeconds % 60;

  //   const pad = (num: number) => num.toString().padStart(2, '0');

  //   if (hours > 0) {
  //     return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  //   }

  //   return `${pad(minutes)}:${pad(seconds)}`;
  // });

  // answerCardColor(id: string) {
  //   switch (id) {
  //     case 'a':
  //       return 'bg-orange-500 hover:bg-orange-600 text-orange-500'
  //     case 'b':
  //       return 'bg-red-500 hover:bg-red-600 text-red-500'
  //     case 'c':
  //       return 'bg-green-500 hover:bg-green-600 text-green-500'
  //     case 'd':
  //       return 'bg-blue-500 hover:bg-blue-600 text-blue-500'
  //     case 'f':
  //       return 'bg-red-500 hover:bg-red-600 text-red-500 font-bold! flex items-center justify-center text-2xl!'
  //     case 'v':
  //       return 'bg-green-500 hover:bg-green-600 text-green-500 font-bold! flex items-center justify-center text-2xl!'
  //     default:
  //       return 'bg-slate-500 hover:bg-slate-600 '

  //   }
  // }

  // private async playCorrectSound() {
  //   const { id, promise } = this.soundService.playAsync(
  //     'assets/sounds/effects/resps.mp3',
  //     {
  //       startsAt: 0.2,
  //       duration: 1.2
  //     }
  //   );

  //   await promise

  //   this.soundService.setVolume(id, .2)
  // }

  // private async playWrongSound() {
  //   const { id, promise } = this.soundService.playAsync(
  //     'assets/sounds/effects/resps.mp3',
  //     {
  //       startsAt: 3,
  //       duration: 1
  //     }
  //   );

  //   await promise

  //   this.soundService.setVolume(id, .2)
  // }

  // private timeEnded(): void {
  //   if (this.answersDisabled()) {
  //     return;
  //   }

  //   this.answersDisabled.set(true);

  //   this.playWrongSound();

  //   this.session.update(old => ({
  //     ...old,
  //     wrongAnswers: old.wrongAnswers + 1
  //   }));

  //   this.nextQuestion();
  // }

  // private setupTimer(): void {
  //   this.clearTimer();

  //   const timeLimit =
  //     this.currentQuestion()?.timeLimit ??
  //     this.settings().defaultTimeLimit ??
  //     15;

  //   this.currentTime.set(timeLimit);

  //   const timer = setInterval(() => {
  //     const time = this.currentTime();

  //     if (time <= 1) {
  //       this.clearTimer();
  //       this.timeEnded();
  //       return;
  //     }

  //     this.currentTime.set(time - 1);
  //   }, 1000);

  //   this.interval.set(timer);
  // }

  // private clearTimer(): void {
  //   const timer = this.interval();

  //   if (timer !== null) {
  //     clearInterval(timer);
  //     this.interval.set(null);
  //   }
  // }

  // start(): void {
  //   if (this.session().startedAt > 0) {
  //     return;
  //   }

  //   this.session.update(old => ({
  //     ...old,
  //     startedAt: Date.now()
  //   }));

  //   this.setupTimer();

  //   const id = this.soundService.play('assets/sounds/musics/m-1.mp3', { loop: true })
  //   this.soundService.setVolume(id, .2)
  //   this.music.set(id)
  // }

  // back() {
  //   this.location.back()
  // }

  // setResultData(data: { xp: number, xpNeeded: number, level: number }) {
  //   this.result.set({
  //     quizId: this.quiz().id,
  //     totalQuestions: this.questions().length,
  //     correctAnswers: this.session().correctAnswers,
  //     wrongAnswers: this.session().wrongAnswers,
  //     score: this.session().score,
  //     answers: this.session().answers,
  //     accuracy: (this.session().correctAnswers / this.questions().length) * 100,
  //     timeSpent: 0,
  //     rewards: []
  //   })
  //   this.xpResult.set(data)
  // }

  // finish() {
  //   const u: User = this.userService.get()

  //   u.progress.xp = this.xpResult().xp
  //   u.progress.xpNeeded = this.xpResult().xpNeeded
  //   u.progress.level = this.xpResult().level

  //   this.userService.update(u);
  //   this.back();
  // }

  // private getQuestionXpReward(): number {
  //   const question = this.currentQuestion();
  //   const settings = this.settings();

  //   const questionReward = question.rewards?.find(
  //     reward => reward.type === 'xp'
  //   );

  //   if (questionReward?.type === 'xp') {
  //     return questionReward.xpAmount!;
  //   }

  //   const defaultReward = settings.defaultRewards?.find(
  //     reward =>
  //       reward.type === 'xp' &&
  //       reward.applyOn === 'auto'
  //   );

  //   if (defaultReward?.type === 'xp') {
  //     return defaultReward.xpAmount!;
  //   }

  //   return 0;
  // }

  // private getQuizFinishedRewards() {
  //   return this.settings().defaultRewards?.filter(
  //     reward => reward.applyOn === 'quiz-finished'
  //   ) ?? [];
  // }

  // private calculateScore(): number {
  //   const question = this.currentQuestion();

  //   const maxTime =
  //     question.timeLimit ??
  //     this.settings().defaultTimeLimit ??
  //     15;

  //   const remaining = this.currentTime();

  //   const maxXp = this.getQuestionXpReward();

  //   if (maxXp <= 0 || maxTime <= 0) {
  //     return 0;
  //   }

  //   const progress = Math.max(
  //     0,
  //     Math.min(1, remaining / maxTime)
  //   );

  //   const minimumMultiplier = 0.1;

  //   const multiplier =
  //     minimumMultiplier +
  //     (1 - minimumMultiplier) * progress;

  //   return Math.round(maxXp * multiplier);
  // }

  // async answer(answer: QuizAnswer): Promise<void> {

  //   if (this.answersDisabled()) {
  //     return;
  //   }

  //   this.answersDisabled.set(true);
  //   this.clearTimer();

  //   this.session.update(old => ({
  //     ...old,

  //     score: answer.isCorrect ? old.score + this.calculateScore() : old.score,

  //     correctAnswers: answer.isCorrect
  //       ? old.correctAnswers + 1
  //       : old.correctAnswers,

  //     wrongAnswers: answer.isCorrect
  //       ? old.wrongAnswers
  //       : old.wrongAnswers + 1,
  //   }));

  //   if (answer.isCorrect) {

  //     await this.playCorrectSound()

  //   } else {
  //     await this.playWrongSound()
  //   }

  //   if (this.currentQuestion().explanation && !this.skipExplanation()) {
  //     this.showExplanation.set(true)
  //   } else {
  //     this.nextQuestion();
  //   }
  // }

  // nextQuestion(): void {
  //   this.showExplanation.set(false)
  //   this.clearTimer();

  //   const currentIndex = this.session().currentQuestionIndex;
  //   const nextIndex = currentIndex + 1;

  //   if (nextIndex >= this.questions().length) {
  //     this.finishQuiz();
  //     return;
  //   }

  //   this.session.update(old => ({
  //     ...old,
  //     currentQuestionIndex: nextIndex
  //   }));

  //   this.answersDisabled.set(false);
  //   this.setupTimer();
  // }

  // private finishQuiz(): void {
  //   this.clearTimer();

  //   this.soundService.stop(this.music());

  //   this.soundService.play('assets/sounds/effects/win.mp3');

  //   this.session.update(old => ({
  //     ...old,
  //     finishedAt: Date.now()
  //   }));

  //   this.answersDisabled.set(true);

  //   console.log(this.getQuizFinishedRewards());

  // }
}
