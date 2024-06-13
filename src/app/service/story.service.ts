// message.service.ts
import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Story} from '../models/story.model';


@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private stories: Story[] = [
    {
      id: 1,
      username: 'Alice Smith',
      icon: `assets/pictures/story/1.jpg`,
      createdAt: '2024-06-12T10:20:30Z'
    },
    {
      id: 2,
      username: 'Bob Johnson',
      icon: `assets/pictures/story/2.jpg`,
      createdAt: '2024-06-11T15:45:00Z'
    },
    {
      id: 3,
      username: 'Emma Brown',
      icon: `assets/pictures/story/3.jpg`,
      createdAt: '2024-06-10T08:00:00Z'
    },
    {
      id: 4,
      username: 'David Lee',
      icon: `assets/pictures/story/4.jpg`,
      createdAt: '2024-06-09T18:30:00Z'
    },
    {
      id: 5,
      username: 'Grace Miller',
      icon: `assets/pictures/story/5.jpg`,
      createdAt: '2024-06-08T12:15:00Z'
    },
    {
      id: 6,
      username: 'Oliver Wilson',
      icon: `assets/pictures/story/6.jpg`,
      createdAt: '2024-06-07T09:30:00Z'
    },
    {
      id: 7,
      username: 'Sophia Garcia',
      icon: `assets/pictures/story/7.jpg`,
      createdAt: '2024-06-06T16:45:00Z'
    }
  ];


  getStories(): Observable<Story[]> {
    return of(this.stories);
  }
}
