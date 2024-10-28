import { Injectable } from '@angular/core';

/**
 * Represents a single confetti particle in the animation
 */
interface Confetti {
  x: number;           // X position
  y: number;           // Y position
  rotation: number;    // Current rotation angle in degrees
  emoji: string;       // Emoji character to display
  velocityX: number;   // Horizontal velocity
  velocityY: number;   // Vertical velocity
  rotationSpeed: number; // Speed of rotation
  opacity: number;     // Current opacity value
}

/**
 * Service that manages confetti explosion animations using Canvas
 */
@Injectable({
  providedIn: 'root'
})
export class ConfettiService {
  private confettis: Confetti[] = [];
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrameId: number | null = null;
  
  private readonly CONFETTI_COUNT = 60;    // Number of confetti particles per explosion
  private readonly MIN_VELOCITY = 10;      // Minimum initial velocity
  private readonly MAX_VELOCITY = 20;      // Maximum initial velocity
  private readonly GRAVITY = 0.03;         // Gravity force applied to particles
  private readonly DRAG = 0.03;            // Air resistance coefficient
  private readonly EMOJIS = ['🎉', '🎊', '✨', '⭐', '🌟'];
  private readonly ROTATION_SPEED = 15;    // Base rotation speed

  /**
   * Initializes the canvas for confetti animation
   * @param canvas - The canvas element to draw on
   */
  init(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  /**
   * Adjusts canvas size to match window dimensions
   */
  private resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  /**
   * Creates a single explosion of confetti at specified coordinates
   * @param x - X coordinate of explosion center
   * @param y - Y coordinate of explosion center
   */
  explode(x: number, y: number) {
    this.confettis = [];
    
    for (let i = 0; i < this.CONFETTI_COUNT; i++) {
      const angle = (Math.PI * 2 * i) / this.CONFETTI_COUNT + (Math.random() * 0.5 - 0.25);
      const velocity = this.MIN_VELOCITY + Math.random() * (this.MAX_VELOCITY - this.MIN_VELOCITY);
      const emoji = this.EMOJIS[Math.floor(Math.random() * this.EMOJIS.length)];
      const randomOffset = (Math.random() - 0.5) * 2;
      
      this.confettis.push({
        x,
        y,
        emoji,
        rotation: Math.random() * 360,
        velocityX: Math.cos(angle) * velocity * (1 + randomOffset * 0.2),
        velocityY: Math.sin(angle) * velocity * (1 + randomOffset * 0.2),
        rotationSpeed: (Math.random() - 0.5) * this.ROTATION_SPEED,
        opacity: 1
      });
    }
    
    if (this.animationFrameId === null) {
      this.animate();
    }
  }

  /**
   * Creates multiple explosions in sequence with slight position variations
   * @param x - Base X coordinate for explosions
   * @param y - Base Y coordinate for explosions
   * @param count - Number of sequential explosions
   * @param delay - Delay between explosions in milliseconds
   */
  explodeMultiple(x: number, y: number, count: number = 3, delay: number = 100) {
    for(let i = 0; i < count; i++) {
      setTimeout(() => {
        const offsetX = x + (Math.random() - 0.5) * 50;
        const offsetY = y + (Math.random() - 0.5) * 50;
        this.explode(offsetX, offsetY);
      }, i * delay);
    }
  }

  /**
   * Animates all active confetti particles
   * Updates positions, applies physics, and renders each frame
   */
  private animate() {
    if (!this.ctx || !this.canvas) return;
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    let stillAlive = false;
    
    for (const confetti of this.confettis) {
      confetti.x += confetti.velocityX;
      confetti.y += confetti.velocityY;
      
      confetti.velocityY += this.GRAVITY;
      confetti.velocityX *= (1 - this.DRAG);
      confetti.velocityY *= (1 - this.DRAG);
      
      confetti.rotation += confetti.rotationSpeed;
      confetti.opacity = Math.max(0, confetti.opacity - 0.003);
      
      this.ctx.save();
      this.ctx.globalAlpha = confetti.opacity;
      this.ctx.translate(confetti.x, confetti.y);
      this.ctx.rotate((confetti.rotation * Math.PI) / 180);
      this.ctx.font = '24px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(confetti.emoji, 0, 0);
      this.ctx.restore();
      
      if (confetti.opacity > 0) {
        stillAlive = true;
      }
    }
    
    if (stillAlive) {
      this.animationFrameId = requestAnimationFrame(() => this.animate());
    } else {
      this.animationFrameId = null;
    }
  }

  /**
   * Cleans up animation resources and stops any ongoing animation
   */
  cleanup() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    this.confettis = [];
  }
}