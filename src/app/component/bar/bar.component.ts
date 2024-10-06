import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  // Initial battery percentage (starting at 45%)
  batteryPercentage = 45;
  
  // Time remaining in seconds (45 minutes or 45 seconds depending on debug mode)
  timeRemaining = 45 * 60; // 45 minutes by default (in seconds)
  
  timerStarted = false;
  intervalId: any;
  
  // Debug mode to switch between seconds and minutes (true = seconds, false = minutes)
  debugMode = false;

  @HostListener('document:touchstart', ['$event'])
  onTouchStart(): void {
    if (!this.timerStarted) {
      // Wait 10 seconds after first touch before starting the timer
      this.timerStarted = true;
      setTimeout(() => {
        this.startTimer();
      }, 10000);
    }
  }

  ngOnInit(): void {
    if (this.debugMode) {
      this.timeRemaining = 45; // Debug mode (seconds)
    } else {
      this.timeRemaining = 45 * 60; // Production mode (minutes)
    }
  }

  /**
   * Starts the countdown timer and decreases the battery percentage.
   * The battery depletes at a rate that corresponds to 45 minutes (or seconds in debug mode).
   */
  startTimer(): void {
    this.intervalId = setInterval(() => {
      if (this.batteryPercentage > 0) {
        this.timeRemaining--;
        this.updateBatteryPercentage();
      } else {
        clearInterval(this.intervalId);
        //Do something when battery is empty
      }
    }, 1000);
  }

  /**
   * Updates the battery percentage based on the time passed.
   * Each minute (or second in debug mode) corresponds to 1% of the battery.
   */
  updateBatteryPercentage(): void {
    const timePassed = this.debugMode
      ? (45 - this.timeRemaining) // In debug mode, 1% per second
      : Math.floor((45 * 60 - this.timeRemaining) / 60); // In normal mode, 1% per minute
    
    this.batteryPercentage = 45 - timePassed;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
