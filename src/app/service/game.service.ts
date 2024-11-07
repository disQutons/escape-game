import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AppService } from './app.service';

export interface GameState {
  firstCallMade: boolean;
  secondCallMade: boolean;
  gameCompleted: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gameStateSubject = new BehaviorSubject<GameState>({
    firstCallMade: false,
    secondCallMade: false,
    gameCompleted: false,
  });

  constructor(private router: Router, private appService: AppService) {}

  checkCall(winCondition: number): void {
    const currentState = this.gameStateSubject.value;

    if (winCondition === 1) {
      this.gameStateSubject.next({
        ...currentState,
        firstCallMade: true,
      });
    } else if (winCondition === 2) {
      this.gameStateSubject.next({
        ...currentState,
        secondCallMade: true,
      });
    }

    if (this.isGameComplete()) {
      this.gameStateSubject.next({
        ...this.gameStateSubject.value,
        gameCompleted: true,
      });
    }
  }

  isGameComplete(): boolean {
    const state = this.gameStateSubject.value;
    return state.firstCallMade && state.secondCallMade;
  }

  getGameState() {
    return this.gameStateSubject.asObservable();
  }

  resetGame() {
    this.gameStateSubject.next({
      firstCallMade: false,
      secondCallMade: false,
      gameCompleted: false,
    });  
    this.appService.resetApps();    
    window.location.href = '/';
  }

  continueGame() {
    this.router.navigate(['/']);
  }

  getCurrentState(): GameState {
    return this.gameStateSubject.value;
  }

  resetPartialState(newState: GameState) {
    this.gameStateSubject.next(newState);
  }
}
