import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface SoundInstance {
  id: string;
  audio: HTMLAudioElement;
  timeout?: ReturnType<typeof setTimeout>;
}

export interface PlayOptions {
  startsAt?: number;
  duration?: number;
  loop?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  private instancesSubject = new BehaviorSubject<Map<string, SoundInstance>>(
    new Map()
  );

  readonly instances = this.instancesSubject.asObservable();

  /**
   * Toca um som de forma síncrona/fire-and-forget.
   *
   * @returns ID da instância criada
   */
  play(source: string, options: PlayOptions = {}): string {
    const { id, promise } = this.createAndPlayInstance(source, options);

    // Captura erros assíncronos para evitar chamadas Unhandled Promise Rejection
    promise.catch(() => { });

    return id;
  }

  /**
   * Toca um som e retorna uma Promise que resolve ao finalizar o áudio/duração.
   */
  playAsync(source: string, options: PlayOptions = {}): { id: string, promise: Promise<void> } {
    const { id, promise } = this.createAndPlayInstance(source, options);
    return { id, promise };
  }

  setVolume(id: string, value: number) {
    const instances = new Map(this.instancesSubject.value);
    const instance = instances.get(id);

    if (!instance) return;

    instance.audio.volume = value
  }

  /**
   * Método centralizado para criação, execução e controle do ciclo de vida dos áudios.
   */
  private createAndPlayInstance(
    source: string,
    options: PlayOptions
  ): { id: string; promise: Promise<void> } {
    const { startsAt = 0, duration, loop = false } = options;
    const id = crypto.randomUUID();
    const audio = new Audio(source);

    audio.loop = loop;
    audio.currentTime = startsAt;

    const instance: SoundInstance = { id, audio };

    // Adiciona a nova instância ao Map de estado
    const currentMap = new Map(this.instancesSubject.value);
    currentMap.set(id, instance);
    this.instancesSubject.next(currentMap);

    const promise = new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        this.removeInstance(id);
      };

      // Se 'loop' for true, o evento 'ended' só dispara se a reprodução for interrompida/forçada
      audio.addEventListener(
        'ended',
        () => {
          cleanup();
          resolve();
        },
        { once: true }
      );

      audio.addEventListener(
        'error',
        () => {
          cleanup();
          reject(new Error(`Erro ao reproduzir o áudio: ${source}`));
        },
        { once: true }
      );

      // Se houver duração definida, interrompe a reprodução após o tempo especificado
      if (duration !== undefined) {
        instance.timeout = setTimeout(() => {
          cleanup();
          resolve();
        }, duration * 1000);
      }

      // Inicia a execução do áudio
      audio.play().catch((error) => {
        cleanup();
        reject(error);
      });
    });

    return { id, promise };
  }

  /**
   * Para uma instância específica imediatamente.
   */
  stop(id: string): void {
    this.removeInstance(id);
  }

  /**
   * Remove uma instância da lista e cancela recursos ativos.
   */
  private removeInstance(id: string): void {
    const instances = new Map(this.instancesSubject.value);
    const instance = instances.get(id);

    if (!instance) {
      return;
    }

    if (instance.timeout) {
      clearTimeout(instance.timeout);
    }

    instance.audio.pause();
    instance.audio.src = '';

    instances.delete(id);
    this.instancesSubject.next(instances);
  }
}