import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { App } from '../../models/app.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.css'],
})
export class AppGridComponent implements OnInit {
  apps: App[] = [];
  showUnlockPopup = false;
  currentApp: string = '';

  constructor(private appService: AppService, private router: Router) {
    this.apps = this.appService.getApps();
  }

  ngOnInit(): void {}

  openApp(app: App) {
    if (app.locked) {
      this.currentApp = app.navigation;
      this.showUnlockPopup = true;
    } else {
      this.router.navigate(['/' + app.navigation]);
    }
  }

  onUnlocked() {
    this.apps = this.appService.getApps();
    this.router.navigate(['/' + this.currentApp]);
  }

  closeUnlock() {
    this.showUnlockPopup = false;
    this.currentApp = '';
  }
}
