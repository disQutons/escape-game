import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { MusicService } from '../../../app/service/music.service';
declare var PatternLock: any;

@Component({
  selector: 'app-pattern-lock',
  templateUrl: './pattern-lock.component.html',
  styleUrls: ['./pattern-lock.component.css']
})
export class PatternLockComponent implements OnInit, AfterViewInit {
  @Input() onSuccess!: () => void;

  title = 'pattern-lock';
  matchedPattern = [5784, 14785963, 36958741, 12356987, 78965321, 74152369, 96325147, 32145789, 98754123];
  isMatched: boolean|null = null;
  attempts = 0;
  showHintModal = false;
  hintMessage = '';

  audio: HTMLAudioElement;

  constructor(private musicService: MusicService) {
    this.audio = new Audio();
    this.audio.src = './assets/unlock_sound.wav';
    this.audio.load();
    this.audio.onerror = (error) => {
      console.error('Error loading audio:', error);
    };
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const me = this;
    const p = new PatternLock(document.getElementById('lock'), {
      onPattern: function (pattern: any) {
        if (pattern) {
          if (me.matchedPattern.includes(pattern)) {
            me.isMatched = true;
            if (me.onSuccess){
              me.onSuccess()
              me.playUnlockSound();
              this.success()
              me.musicService.play();
            }
          } else {
            me.isMatched = false;
            this.error();
            me.attempts++;
            me.checkAttempts();
          }
        }
      }
    });
  }

  checkAttempts() {
    if (this.attempts === 5) {
      this.hintMessage = "Avez-vous regardé le brouillon d'Antoine ?";
      this.showHintModal = true;
    } else if (this.attempts === 10) {
      this.hintMessage = "Quel symbole revient plusieurs fois, sur le brouillon d'Antoine ?";
      this.showHintModal = true;
    }
  }

  closeHintModal() {
    this.showHintModal = false;
  }

  playUnlockSound() {
    if (this.audio.readyState >= 2) {
      this.audio.play();
    } else {
      console.warn('Audio is still loading. Please wait.');
    }
  }
}