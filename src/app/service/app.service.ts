import { Injectable } from '@angular/core';
import {App} from "../models/app.model";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getApps(): App[]{
    return [
      { name: 'Instagram', icon: 'assets/pictures/apps/instagram.png' },
      { name: 'Discord', icon: 'assets/pictures/apps/discorde.png' },
      { name: 'Messages', icon: 'assets/pictures/apps/messages.png' },
      { name: 'Telephone', icon: 'assets/pictures/apps/appel.png' },
      { name: 'Galerie', icon: 'assets/pictures/apps/photo.png' }
    ]
  }
}
