import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
declare var PatternLock: any;
@Component({
  selector: 'app-pattern-lock',
  templateUrl: './pattern-lock.component.html',
  styleUrls: ['./pattern-lock.component.css']
})
export class PatternLockComponent implements OnInit, AfterViewInit{
  @Input() onSuccess!: () => void;

  title = 'pattern-lock';
  matchedPattern = [5784, 14785963, 36958741, 12356987, 78965321, 74152369, 96325147, 32145789, 98754123];
  isMatched: boolean|null = null;

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
            }
          } else {
            me.isMatched = false;
            this.error()
          }
        }

      }
    });
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
