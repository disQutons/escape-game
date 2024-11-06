import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer, Subscription } from 'rxjs';
import { PhoneContact, CallState } from '../pages/phone/phone.model';
import { AppService } from './app.service';
import { GameService } from './game.service';
import { MusicService } from './music.service';

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  private contacts: PhoneContact[] = [
    {
      id: 1,
      name: '02 40 41 85 32',
      number: '0240418532',
      avatar: 'assets/avatars/profil_default.png',
      audioFile: 'assets/audio/fleuriste-prof.mp3',
      pickupDelay: 2,
      winCondition: 1
    },
    {
      id: 2,
      name: 'Josh',
      number: '0240123578',
      avatar: 'assets/avatars/josh_profil.png',
      audioFile: 'assets/audio/poissonnerie.mp3',
      pickupDelay: 3,
      requiredApps: ['discord'],
      winCondition: 2
    },
    {
      id: 3,
      name: 'Josh',
      number: '0240123578',
      avatar: 'assets/avatars/josh_profil.png',
      audioFile: 'assets/audio/josh-antoine.mp3',
      pickupDelay: 3,
      requiredApps: ['discord'],
      winCondition: 2
    },
    {
      id: 4,
      name: 'Club de Tennis',
      number: '0240859674',
      avatar: 'assets/avatars/profil_default.png',
      audioFile: 'assets/audio/club.mp3',
      pickupDelay: 3,
    },
    {
      id: 5,
      name: '02 40 12 34 56',
      number: '0240123456',
      avatar: 'assets/avatars/profil_default.png',
      audioFile: 'assets/audio/banque.mp3',
      pickupDelay: 2,
      requiredApps: ['discord']
    },
    {
      id: 6,
      name: 'Police',
      number: '0240592233',
      avatar: 'assets/avatars/profil_default.png',
      audioFile: 'assets/audio/gendarmerie_avant.mp3',
      pickupDelay: 2,
    },
    {
      id: 7,
      name: 'Police',
      number: '0240592233',
      avatar: 'assets/avatars/profil_default.png',
      audioFile: 'assets/audio/gendarmerie_apres.mp3',
      pickupDelay: 2,
      requiredApps: ['discord'],
      winCondition: 1
    },
  ];

  // Special number that triggers the game ending sequence when called
  private readonly endingNumber = '0666666666';
  private readonly invalidNumberAudio = 'assets/audio/invalid-number.mp3';
  //TODO à supprimer ?
  //private readonly winAudio = 'assets/audio/ending-message.mp3';
  private readonly unknownNumberDuration = 2; // Duration for unknown numbers in seconds

  private callStateSubject = new BehaviorSubject<CallState>({
    isActive: false,
    status: 'ended',
    currentDuration: 0,
  });

  private audio: HTMLAudioElement | null = null;
  private ringtoneAudio: HTMLAudioElement | null = null;
  private durationTimer?: Subscription;
  private startTime?: number;
  private callTimeout?: NodeJS.Timeout;
  private wasMusicPlaying: boolean = false;

  constructor(
    private appService: AppService,
    private gameService: GameService,
    @Inject(MusicService)
    private musicService: MusicService
  ) {}

  /**
   * Validates if the provided number follows French phone number format
   * @param number The phone number to validate
   * @returns boolean indicating if the number is valid
   */
  validateFrenchPhoneNumber(number: string): boolean {
    return /^0[1-9][0-9]{8}$/.test(number);
  }

  /**
   * Returns the list of available phone contacts
   * @returns Array of PhoneContact objects
   */
  getContacts(): PhoneContact[] {
    return this.contacts;
  }

  /**
   * Initiates a phone call to the specified number
   * Handles validation, contact lookup, and appropriate call flow
   * @param number The phone number to call
   */
  initiateCall(number: string): void {
    this.stopTimer();
    this.clearCallTimeout();
    this.stopRingtone();

    this.wasMusicPlaying = this.musicService.isPlaying();
    if (this.wasMusicPlaying) {
      this.musicService.pause();
    }

    if (!this.validateFrenchPhoneNumber(number)) {
      this.handleInvalidNumber();
      return;
    }
    const contact = this.contacts.find((c) => c.number === number);
    const isEndingNumber = number === this.endingNumber;

    if (contact) {
      if (this.canAccessContact(contact)) {
        this.startCall(contact, false);
      } else {
        this.startUnknownCall();
      }
    } else if (isEndingNumber) {
      this.startCall(undefined, true);
    } else {
      this.startUnknownCall();
    }
  }

  /**
   * Plays the ringtone audio with loop functionality
   */
  private playRingtone(): void {
    if (this.ringtoneAudio) {
      this.ringtoneAudio.pause();
      this.ringtoneAudio.currentTime = 0;
    } else {
      this.ringtoneAudio = new Audio('assets/audio/phone-calling.mp3');
      this.ringtoneAudio.loop = true;
    }
    this.ringtoneAudio.play();
  }

  /**
   * Stops the ringtone audio and cleans up the audio object
   */
  private stopRingtone(): void {
    if (this.ringtoneAudio) {
      this.ringtoneAudio.loop = false;
      this.ringtoneAudio.pause();
      this.ringtoneAudio.currentTime = 0;
      this.ringtoneAudio = null;
    }
  }

  /**
   * Handles the call flow for unknown numbers
   * Plays ringtone and ends call after specified duration
   */
  private startUnknownCall(): void {
    this.callStateSubject.next({
      isActive: true,
      status: 'dialing',
      currentDuration: 0,
    });

    this.playRingtone();

    setTimeout(() => {
      if (this.callStateSubject.value.isActive) {
        this.startTime = Date.now();

        this.durationTimer = timer(0, 1000).subscribe(() => {
          const currentDuration = Math.floor((Date.now() - this.startTime!) / 1000);
          this.callStateSubject.next({
            isActive: true,
            status: 'dialing',
            currentDuration,
          });
        });

        this.callTimeout = setTimeout(() => {
          this.endCall();
        }, this.unknownNumberDuration * 1000);
      }
    }, 1000);
  }

  /**
   * Initiates a call to a known contact or the ending number
   * Handles the call flow including pickup delay and audio playback
   * @param contact The contact being called (undefined for ending number)
   * @param isEndingNumber Boolean indicating if this is the winning call
   */
  private startCall(contact: PhoneContact | undefined, isEndingNumber: boolean): void {
    this.callStateSubject.next({
      isActive: true,
      contact,
      status: 'dialing',
      currentDuration: 0,
      isGameEnding: isEndingNumber,
    });

    this.playRingtone();

    const pickupDelay = contact ? contact.pickupDelay * 1000 : 2000;

    setTimeout(() => {
      if (this.callStateSubject.value.isActive) {
        this.stopRingtone();

        this.callStateSubject.next({
          ...this.callStateSubject.value,
          status: 'connected',
          currentDuration: 0,
        });

        if (contact?.winCondition) {
          this.gameService.checkCall(contact.winCondition);
        }

        //TODO à supprimer ?
        //const audioFile = contact ? contact.audioFile : this.winAudio;
        //this.playAudio(audioFile);

        this.startTime = Date.now();
        this.durationTimer = timer(0, 1000).subscribe(() => {
          const currentDuration = Math.floor((Date.now() - this.startTime!) / 1000);
          this.callStateSubject.next({
            ...this.callStateSubject.value,
            currentDuration,
          });
        });
      }
    }, pickupDelay);
  }

  /**
   * Handles the invalid number call flow
   * Plays error audio and updates call state
   */
  private handleInvalidNumber(): void {
    this.playAudio(this.invalidNumberAudio);
    this.callStateSubject.next({
      isActive: true,
      status: 'error',
      currentDuration: 0,
    });
  }

  /**
   * Clears any existing call timeout
   */
  private clearCallTimeout(): void {
    if (this.callTimeout) {
      clearTimeout(this.callTimeout);
      this.callTimeout = undefined;
    }
  }

  /**
   * Plays an audio file and sets up the end call handler
   * @param audioFile Path to the audio file to play
   */
  private playAudio(audioFile: string): void {
    if (this.audio) {
      this.audio.pause();
    }
    this.audio = new Audio(audioFile);
    this.audio.play();

    this.audio.onended = () => {
      this.endCall();
    };
  }

  /**
   * Stops the call duration timer
   */
  private stopTimer(): void {
    if (this.durationTimer) {
      this.durationTimer.unsubscribe();
      this.durationTimer = undefined;
    }
  }

  /**
   * Ends the current call and cleans up all resources
   */
  endCall(): void {
    this.stopTimer();
    this.clearCallTimeout();
    this.stopRingtone();
    
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
    
    this.startTime = undefined;
    this.callStateSubject.next({
      isActive: false,
      status: 'ended',
      currentDuration: 0,
    });

    if (this.wasMusicPlaying) {
      this.musicService.play();
    }
  }

  /**
   * Returns an Observable of the current call state
   * @returns Observable<CallState>
   */
  getCallState(): Observable<CallState> {
    return this.callStateSubject.asObservable();
  }

  private canAccessContact(contact: PhoneContact): boolean {
    if (!contact.requiredApps || contact.requiredApps.length === 0) return true;
    return contact.requiredApps.every(app => this.appService.isAppUnlocked(app));
  }
}
