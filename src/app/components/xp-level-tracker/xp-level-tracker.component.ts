import { Component, computed, effect, EventEmitter, input, Input, OnInit, Output, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'xp-level-tracker',
  imports: [],
  templateUrl: './xp-level-tracker.component.html',
  styleUrl: './xp-level-tracker.component.css',
})
export class XpLevelTrackerComponent implements OnInit {
  @Input() display: 'full' | 'resumed' = 'full';
  @Output() calculatedLevel = new EventEmitter()

  xpGained = input(0);

  user = signal<User>({} as User);

  displayedXp = signal(0);
  displayedLevel = signal(0);
  displayedXpNeeded = signal(0);

  // Reage automaticamente a cada atualização do displayedXp durante o requestAnimationFrame
  progressPercent = computed(() => {
    const needed = this.displayedXpNeeded();
    if (!needed || needed <= 0) return 0;

    return Math.min(100, Math.max(0, (this.displayedXp() / needed) * 100));
  });

  constructor(private userService: UserService) {
    effect(() => {
      const user = this.user();

      if (!user.progress) return;

      this.displayedXp.set(user.progress.xp);
      this.displayedLevel.set(user.progress.level);
      this.displayedXpNeeded.set(user.progress.xpNeeded);

      if (this.display === 'resumed' && this.xpGained() > 0) {
        this.animateXp();
      }
    });
  }

  ngOnInit(): void {
    this.load();
    this.userService.updated.subscribe(() => {
      this.load()
    })
  }

  load() {
    const u = this.userService.get()
    this.user.set(u);
    this.displayedXpNeeded.set(u.progress.xpNeeded)
  }

  private sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Interpola o número e consequentemente a barra via computed (60 FPS com easing)
  private animateNumber(from: number, to: number, duration = 800) {
    const start = performance.now();

    return new Promise<void>(resolve => {
      const update = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);

        // Ease-out cubic para desaceleração suave
        const eased = 1 - Math.pow(1 - progress, 3);

        const value = Math.round(from + (to - from) * eased);

        // Atualiza o signal numérico -> dispara o computed da barra
        this.displayedXp.set(value);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          this.displayedXp.set(to);
          resolve();
        }
      };

      requestAnimationFrame(update);
    });
  }

  // Gerencia o fluxo de incremento e subida de nível
  private async animateXp() {
    let xp = this.user().progress.xp;
    let level = this.user().progress.level;
    let xpNeeded = this.user().progress.xpNeeded;
    let remaining = this.xpGained();

    while (remaining > 0) {
      const xpToLevelUp = xpNeeded - xp;
      const amount = Math.min(remaining, xpToLevelUp);

      // Anima o trecho atual do XP com a interpolação suave
      await this.animateNumber(xp, xp + amount);

      xp += amount;
      remaining -= amount;

      // Evento de Level Up
      if (xp >= xpNeeded) {
        xp = 0;
        level++;

        // Pequena pausa com a barra cheia antes de resetar para o novo nível
        await this.sleep(300);

        this.displayedXp.set(0);
        this.displayedLevel.set(level);

        // Calcula o novo limite do nível (substitua pela sua função se tiver)
        xpNeeded = this.calculateXpNeeded(level);
        this.displayedXpNeeded.set(xpNeeded);

        await this.sleep(200);
      }
    }

    this.calculatedLevel.emit({ xp, xpNeeded, level })
  }

  private calculateXpNeeded(level: number): number {
    // Exemplo de cálculo progressivo por nível (ajuste para a sua regra de negócio)
    return level * 100;
  }
}