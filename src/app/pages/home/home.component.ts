import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/service/analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  patternMatch = false;

  constructor(private analyticsService: AnalyticsService) {
  }

  ngOnInit(): void {
    this.analyticsService.logAction('app_opened').subscribe();
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('patternMatch');
      this.analyticsService.logAction('app_closed').subscribe();
    });
    
    const storedValue = localStorage.getItem('patternMatch');
    this.patternMatch = storedValue ? JSON.parse(storedValue) : false;
    if (this.patternMatch) {
      this.analyticsService.logAction('auto_unlock', { 
        from_storage: true 
      }).subscribe();
    }
  }

  onPatternSuccess: () => void = () => {
    this.patternMatch = true;
    localStorage.setItem('patternMatch', JSON.stringify(true));    
    this.analyticsService.logAction('pattern_unlock_success').subscribe();
  }
}