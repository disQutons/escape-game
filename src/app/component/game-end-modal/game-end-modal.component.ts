import { Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ConfettiService } from 'src/app/service/confetti.service';

@Component({
  selector: 'app-game-end-modal',
  templateUrl: './game-end-modal.component.html',
  styleUrls: ['./game-end-modal.component.css'],
})
export class GameEndModalComponent implements AfterViewInit, OnDestroy {
  @Input() isOptionalEnding: boolean = false;
  @Output() continue = new EventEmitter<void>();
  @Output() finish = new EventEmitter<void>();
  @ViewChild('confettiCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private confettiInitialized = false;

  constructor(private confettiService: ConfettiService) {}

  ngAfterViewInit() {
    if (!this.isOptionalEnding) {
      this.confettiService.init(this.canvasRef.nativeElement);
      this.confettiInitialized = true;
      setTimeout(() => {
        const rect = this.canvasRef.nativeElement.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        this.confettiService.explode(centerX, centerY);
      }, 400);
    }
  }

  ngOnDestroy() {
    if (this.confettiInitialized) {
      this.confettiService.cleanup();
    }
  }

  getMessage(): string {
    if (this.isOptionalEnding) {
      return "Vous avez retrouvé Antoine, bravo ! Est-ce la fin ou bien il reste des choses à faire, des personnes à appeler ?";
    }
    return "Vous avez terminé le jeu, bravo !";
  }

  onContinue(): void {
    this.continue.emit();
  }

  onFinish(): void {
    this.finish.emit();
  }
}