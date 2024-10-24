import { Injectable } from '@angular/core';
import { App } from '../models/app.model';

type AppCodes = {
  [key in 'instagram' | 'discord']: string[];
};

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly APP_CODES: AppCodes = {
    instagram: ['3O!HHT', '30!HHT'],
    discord: ['51370365'],
  };

  private unlockedApps: Set<string> = new Set();

  constructor() {}

  getApps(): App[] {
    return [
      {
        name: 'Instagram',
        icon: 'assets/pictures/apps/instagram.png',
        navigation: 'instagram',
        locked: !this.isAppUnlocked('instagram'),
      },
      {
        name: 'Discord',
        icon: 'assets/pictures/apps/discorde.png',
        navigation: 'discord',
        locked: !this.isAppUnlocked('discord'),
      },
      {
        name: 'Messages',
        icon: 'assets/pictures/apps/messages.png',
        navigation: 'messages',
      },
      {
        name: 'Telephone',
        icon: 'assets/pictures/apps/appel.png',
        navigation: 'phone',
      },
      {
        name: 'Galerie',
        icon: 'assets/pictures/apps/photo.png',
        navigation: 'gallery',
      },
    ];
  }

  checkCode(app: 'instagram' | 'discord', code: string): boolean {
    const validCodes = this.APP_CODES[app];
    return validCodes ? validCodes.includes(code) : false;
  }

  unlockApp(app: string): void {
    this.unlockedApps.add(app);
  }

  isAppUnlocked(app: string): boolean {
    return this.unlockedApps.has(app);
  }

  resetApps(): void {
    this.unlockedApps.clear();
  }
}