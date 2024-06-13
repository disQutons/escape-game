import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css'],
  animations: [
    trigger('slide', [
      state('show', style({ transform: 'translateX(0)' })),
      state('hide', style({ transform: 'translateX(-100%)' })),
      transition('show => hide', [animate('0.5s ease-out')]),
      transition('hide => show', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in', style({ transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slide2', [
      state('show', style({ transform: 'translateX(0)' })),
      state('hide', style({ transform: 'translateX(100%)' })),
      transition('show => hide', [animate('0.5s ease-out')]),
      transition('hide => show', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class InstagramComponent {

  ngOnInit(): void {
    window.addEventListener('popstate', () => {
      this.onSwipeRight();
    });
  }
  currentPage = 1;

  onSwipeLeft(): void {
    if (this.currentPage === 1) {
      history.pushState(null, '');
      this.goToPage(2);
    }
  }

  onSwipeRight(): void {
    if (this.currentPage === 2) {
      this.goToPage(1);
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }
}
