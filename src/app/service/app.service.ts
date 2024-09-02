import {Injectable} from '@angular/core';
import {App} from "../models/app.model";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  getApps(): App[] {
    return [
      {name: 'Instagram', icon: 'assets/pictures/apps/instagram.png', navigation: 'instagram'},
      {name: 'Discord', icon: 'assets/pictures/apps/discorde.png', navigation: 'discord'},
      {name: 'Messages', icon: 'assets/pictures/apps/messages.png', navigation: 'messages'},
      {name: 'Telephone', icon: 'assets/pictures/apps/appel.png', navigation: 'telephone'},
      {name: 'Galerie', icon: 'assets/pictures/apps/photo.png', navigation: 'gallery'}
    ]
  }
}
