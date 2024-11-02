import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private audio: HTMLAudioElement;
  private currentTime: number = 0;

  constructor() {
    this.audio = new Audio('assets/audio/musique_ambiance.mp3'); 
    this.audio.loop = true;
    this.audio.load();
  }

  play() {
    this.audio.currentTime = this.currentTime;
    this.audio.play();
  }

  pause() {
    this.currentTime = this.audio.currentTime;
    this.audio.pause();
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.currentTime = 0;
  }

  isPlaying(): boolean {
    return !this.audio.paused;
  }
}
