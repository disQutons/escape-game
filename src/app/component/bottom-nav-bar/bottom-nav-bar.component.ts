import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.css'],
})
export class BottomNavBarComponent {
  isHomeActive = false;
  showRipple = false;
  rippleX = 0;
  rippleY = 0;

  constructor(private location: Location, private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHomeActive = event.url === '/home' || event.url === '/';
      });
  }

  goBack(): void {
    this.location.back();
    this.createRipple('back');
  }

  goHome(): void {
    this.router.navigate(['/home']);
    this.createRipple('home');
  }

  private createRipple(button: 'back' | 'home'): void {
    this.showRipple = false;
    setTimeout(() => {
      const buttonElement = document.querySelector(`.nav-button-${button}`);
      if (buttonElement) {
        const rect = buttonElement.getBoundingClientRect();
        this.rippleX = rect.left + rect.width / 2;
        this.rippleY = rect.top + rect.height / 2;
        this.showRipple = true;
        setTimeout(() => {
          this.showRipple = false;
        }, 400);
      }
    }, 0);
  }
}
