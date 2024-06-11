import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})

export class ClockComponent implements OnInit {
  currentTime: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    // Update the time every second
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
}
