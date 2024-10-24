// message.service.ts
import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from '../models/story.model';


@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private stories: User[] = [
    {
      id: 1,
      username: 'Kenza',
      icon: `assets/pictures/story/kenza_profil.jpg`,
      createdAt: '2024-06-12T10:20:30Z'
    },
    {
      id: 2,
      username: 'Josh',
      icon: `assets/pictures/story/josh_profil.jpg`,
      createdAt: '2024-06-11T15:45:00Z'
    },
    {
      id: 3,
      username: 'Aymeric',
      icon: `assets/pictures/story/aymeric_profil.jpg`,
      createdAt: '2024-06-10T08:00:00Z'
    },
    {
      id: 4,
      username: 'TennisProPlayer',
      icon: `assets/pictures/story/tennisproplayer.jpg`,
      createdAt: '2024-06-10T08:00:00Z'
    }
  ];


  getStories(): Observable<User[]> {
    return of(this.stories);
  }
}
