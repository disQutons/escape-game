// message.service.ts
import {Injectable} from '@angular/core';
import {Message} from "../models/message.model";
import {Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: Message[] = [
    {
      id: 1,
      user: {
        id: 1,
        username: 'Alice Smith',
        icon: `assets/pictures/story/1.jpg`,
        createdAt: '2024-06-12T10:20:30Z'
      },
      name: 'Alice Smith',
      avatar: 'assets/pictures/img.png',
      lastMessage: 'I will definitely check it out. Thanks for the recommendation!',
      conversation: [
        {text: 'Hey, how are you?', sent: true, date: '2024-06-12T10:20:30Z'},
        {text: 'I am good, how about you?', sent: false, date: '2024-06-12T10:21:00Z'},
        {text: 'I am doing well, thanks for asking!', sent: true, date: '2024-06-12T10:21:30Z'},
        {text: 'What have you been up to lately?', sent: true, date: '2024-06-12T10:22:00Z'},
        {text: 'Just the usual, work and a bit of relaxation. You?', sent: false, date: '2024-06-12T10:22:30Z'},
        {text: 'Same here. Have you watched any good movies recently?', sent: true, date: '2024-06-12T10:23:00Z'},
        {text: 'Yes, I saw a great sci-fi film last weekend.', sent: false, date: '2024-06-12T10:23:30Z'},
        {text: 'Sounds interesting! What was it called?', sent: true, date: '2024-06-12T10:24:00Z'},
        {text: 'It was called "Future Worlds". Highly recommend it!', sent: false, date: '2024-06-12T10:24:30Z'},
        {
          text: 'I will definitely check it out. Thanks for the recommendation!',
          sent: true,
          date: '2024-06-12T10:25:00Z'
        },
      ]

    },
    {
      id: 2,
      name: 'Alexandre Dano',
      user: {
        id: 2,
        username: 'Alexandre Dano',
        icon: `assets/pictures/story/2.jpg`,
        createdAt: '2024-06-11T15:45:00Z'
      },
      avatar: 'assets/pictures/img_1.png',
      lastMessage: 'Thinking of going to Italy later this year. Fingers crossed!',
      conversation: [
        {text: 'Hi there! Long time no see.', sent: true, date: '2024-06-12T15:10:00Z'},
        {text: 'Hey! Yes, it’s been a while. How have you been?', sent: false, date: '2024-06-12T15:11:00Z'},
        {text: 'Pretty good, thanks. Just got back from a trip.', sent: true, date: '2024-06-12T15:12:00Z'},
        {text: 'That’s awesome! Where did you go?', sent: false, date: '2024-06-12T15:13:00Z'},
        {text: 'Went to Japan. It was an amazing experience!', sent: true, date: '2024-06-12T15:14:00Z'},
        {
          text: 'Wow, I’ve always wanted to visit Japan. What was your favorite part?',
          sent: false,
          date: '2024-06-12T15:15:00Z'
        },
        {
          text: 'The culture and the food were incredible. Visited a lot of temples too.',
          sent: true,
          date: '2024-06-12T15:16:00Z'
        },
        {text: 'Sounds fantastic! I’ll have to add it to my travel list.', sent: false, date: '2024-06-12T15:17:00Z'},
        {text: 'You definitely should! How about you? Any plans for a trip?', sent: true, date: '2024-06-12T15:18:00Z'},
        {
          text: 'Thinking of going to Italy later this year. Fingers crossed!',
          sent: false,
          date: '2024-06-12T15:19:00Z'
        },
      ]
    },
    // Add more messages as needed
  ];

  getMessages(): Observable<Message[]> {
    return of(this.messages);
  }

  sendMessage(messageId: number, text: string, date: string): void {
    const message = this.messages.find(m => m.id === messageId);
    if (message) {
      message.conversation.push({text, sent: true, date: date});
      message.lastMessage = text;
    }
  }
}
