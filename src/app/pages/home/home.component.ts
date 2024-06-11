import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  patternMatch = false;
  audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.audio.src = './assets/unlock_sound.wav'; // Relative path to the audio file
    this.audio.load(); // Preload the audio
    // Listen for 'error' event
    this.audio.onerror = (error) => {
      console.error('Error loading audio:', error);
    };
  }

  onPatternSuccess: () => void = () => {
    this.patternMatch = true;
    this.playUnlockSound();
  }

  playUnlockSound() {
    // Check if audio is loaded
    if (this.audio.readyState >= 2) {
      // If loaded, play audio
      this.audio.play();
    } else {
      console.warn('Audio is still loading. Please wait.');
    }
  }
}
