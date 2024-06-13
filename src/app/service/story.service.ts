// message.service.ts
import { Injectable } from '@angular/core';
import {Message} from "../models/message.model";
import {Observable, of} from "rxjs";
import { Story } from '../models/story.model';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private stories: Story[] = [
    {
      id: 1,
      username: 'John Doe',
      icon: 'assets/pictures/img.png',
      createdAt: '2024-06-12T10:20:30Z'
    },
  ];

  getMessages(): Observable<Story[]> {
    return of(this.stories);
  }
}
