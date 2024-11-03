import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RefreshDetectionService {
  constructor(private router: Router) {}

  detectAndRedirect() {
    const isNavigation = !!window.performance.getEntriesByType("navigation")
      .find(entry => (entry as PerformanceNavigationTiming).type === "reload");
    
    if (isNavigation) {
      // Redirect to the home page if the page is refreshed
      this.router.navigate(['/']);
    }
  }
}
