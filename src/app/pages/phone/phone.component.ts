import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhoneService } from 'src/app/service/phone.service';
import { GameService } from 'src/app/service/game.service';
import { CallState } from './phone.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css'],
})
export class PhoneComponent implements OnInit, OnDestroy {
  // Component state
  currentNumber = '';
  callState: CallState | null = null;
  isDialpadVisible = true;
  showEndModal = false;
  isOptionalEnding = false;

  private callStateSubscription?: Subscription;
  private gameStateSubscription?: Subscription;

  /**
   * Layout configuration for the phone keypad
   * Represents the physical arrangement of keys in a 4x3 grid
   */
  readonly keypadLayout = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#'],
  ];

  /**
   * Maps call status codes to their display messages
   */
  readonly callStatusMessages = {
    dialing: 'Appel en cours...',
    connected: 'En appel',
    ended: 'Appel terminé',
    error: 'Numéro non attribué',
  };

  constructor(
    private phoneService: PhoneService,
    private gameService: GameService,
    private router: Router
  ) {}

  /**
   * Initializes the component and subscribes to call state changes
   */
  ngOnInit(): void {
    this.callStateSubscription = this.phoneService
      .getCallState()
      .subscribe((state) => {
        this.callState = state;
        this.isDialpadVisible = !state.isActive;
      });

    this.gameStateSubscription = this.gameService
      .getGameState()
      .subscribe((state) => {
        if (state.gameCompleted) {
          // Both calls have been made
          this.showEndModal = true;
          this.isOptionalEnding = false;
        } else if (state.secondCallMade && !state.firstCallMade) {
          // Second call made without first call
          this.showEndModal = true;
          this.isOptionalEnding = true;
        }
      });
  }

  /**
   * Cleans up subscriptions when the component is destroyed
   */
  ngOnDestroy(): void {
    this.callStateSubscription?.unsubscribe();
    this.gameStateSubscription?.unsubscribe();
  }

  /**
   * Adds a digit to the current number if less than 10 digits
   * @param digit The digit to add
   */
  addDigit(digit: string): void {
    if (this.currentNumber.length < 10) {
      this.currentNumber += digit;
    }
  }

  /**
   * Removes the last digit from the current number
   */
  deleteDigit(): void {
    this.currentNumber = this.currentNumber.slice(0, -1);
  }

  /**
   * Clears the entire current number
   */
  clearNumber(): void {
    this.currentNumber = '';
  }

  /**
   * Formats a phone number with spaces for better readability
   * @param number The phone number to format
   * @returns Formatted phone number with spaces every 2 digits
   */
  formatPhoneNumber(number: string): string {
    if (!number) return '';
    return number.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
  }

  /**
   * Returns the formatted current number for display
   * @returns Formatted phone number
   */
  getDisplayNumber(): string {
    return this.formatPhoneNumber(this.currentNumber);
  }

  /**
   * Initiates a call if the current number is valid (10 digits)
   */
  initiateCall(): void {
    if (this.currentNumber && this.currentNumber.length === 10) {
      this.phoneService.initiateCall(this.currentNumber);
    }
  }

  /**
   * Ends the current call and resets the number
   */
  endCall(): void {
    this.phoneService.endCall();
    this.currentNumber = '';
  }

  /**
   * Gets the current call status message
   * @returns Localized status message
   */
  getCallStatus(): string {
    if (!this.callState) return '';
    return this.callStatusMessages[this.callState.status] || '';
  }

  /**
   * Gets the name of the current caller
   * @returns Caller name or "Unknown number"
   */
  getCallerName(): string {
    return this.callState?.contact?.name || 'Numéro inconnu';
  }

  /**
   * Gets the avatar URL of the current caller
   * @returns Avatar URL or undefined
   */
  getCallerAvatar(): string | undefined {
    return this.callState?.contact?.avatar;
  }

  /**
   * Checks if the call is in connected state
   * @returns Boolean indicating if call is connected
   */
  isConnected(): boolean {
    return this.callState?.status === 'connected';
  }

  /**
   * Formats a duration in seconds to MM:SS format
   * @param seconds Number of seconds to format
   * @returns Formatted duration string
   */
  formatDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  }

  /**
   * Gets the formatted duration of the current call
   * @returns Formatted duration string
   */
  getCallDuration(): string {
    return this.formatDuration(this.callState?.currentDuration || 0);
  }

  /**
   * Gets the CSS class based on current call status
   * @returns CSS class name for styling
   */
  getStatusClass(): string {
    if (!this.callState) return '';

    switch (this.callState.status) {
      case 'dialing':
        return 'status-dialing';
      case 'connected':
        return 'status-connected';
      case 'error':
        return 'status-error';
      default:
        return '';
    }
  }

  /**
   * Handles the continue game action from the end game modal
   * Hides the modal and navigates to home
   */
  onContinueGame(): void {
    this.showEndModal = false;
    this.router.navigate(['/']);
  }

  /**
   * Handles the finish game action from the end game modal
   * Hides the modal and reloads the page to reset the game
   */
  onFinishGame(): void {
    this.showEndModal = false;
    this.router.navigate(['/']);
    window.location.reload();
  }
}
