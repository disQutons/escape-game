// message.service.ts
import {Injectable} from '@angular/core';
import {Message} from "../models/message.model";
import {Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private instagramMessages: Message[] = [
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

  private messages: Message[] = [
    {
      id: 1,
      user: {
        id: 1,
        username: 'John Doe',
        icon: 'assets/pictures/story/3.jpg',
        createdAt: '2024-06-12T10:20:30Z'
      },
      name: 'John Doe',
      avatar: 'assets/pictures/img.png',
      lastMessage: 'Absolutely, I\'ll let you know once I have the details!',
      conversation: [
        {text: 'Hi John, are you free this weekend?', sent: true, date: '2024-06-12T10:20:30Z'},
        {text: 'Hey, yes I am. Why do you ask?', sent: false, date: '2024-06-12T10:21:00Z'},
        {text: 'I was thinking of organizing a hiking trip.', sent: true, date: '2024-06-12T10:21:30Z'},
        {text: 'That sounds great! Count me in.', sent: false, date: '2024-06-12T10:22:00Z'},
        {text: 'Awesome! I’ll send you the details soon.', sent: true, date: '2024-06-12T10:22:30Z'},
        {text: 'Looking forward to it. Need any help with the planning?', sent: false, date: '2024-06-12T10:23:00Z'},
        {text: 'Maybe with the logistics. I’ll keep you posted.', sent: true, date: '2024-06-12T10:23:30Z'},
        {text: 'Sure thing. Just let me know what needs to be done.', sent: false, date: '2024-06-12T10:24:00Z'},
        {text: 'Will do. Thanks for the help, John.', sent: true, date: '2024-06-12T10:24:30Z'},
        {
          text: 'Absolutely, I\'ll let you know once I have the details!',
          sent: false,
          date: '2024-06-12T10:25:00Z'
        },
      ]
    },
    {
      id: 2,
      name: 'Emily Clark',
      user: {
        id: 2,
        username: 'Emily Clark',
        icon: 'assets/pictures/story/4.jpg',
        createdAt: '2024-06-11T15:45:00Z'
      },
      avatar: 'assets/pictures/img_1.png',
      lastMessage: 'I hope the meeting goes well!',
      conversation: [
        {text: 'Hello Emily, how are things?', sent: true, date: '2024-06-12T15:10:00Z'},
        {text: 'Hi! Things are good, just busy with work. You?', sent: false, date: '2024-06-12T15:11:00Z'},
        {text: 'Pretty much the same here. Got a big presentation tomorrow.', sent: true, date: '2024-06-12T15:12:00Z'},
        {text: 'Good luck with that! What’s it about?', sent: false, date: '2024-06-12T15:13:00Z'},
        {text: 'It’s about our new project proposal.', sent: true, date: '2024-06-12T15:14:00Z'},
        {
          text: 'Sounds important. I’m sure you’ll do great.',
          sent: false,
          date: '2024-06-12T15:15:00Z'
        },
        {
          text: 'Thanks, I appreciate it. Any advice?',
          sent: true,
          date: '2024-06-12T15:16:00Z'
        },
        {text: 'Just be confident and clear in your points.', sent: false, date: '2024-06-12T15:17:00Z'},
        {text: 'Will do. Thanks again, Emily!', sent: true, date: '2024-06-12T15:18:00Z'},
        {
          text: 'I hope the meeting goes well!',
          sent: false,
          date: '2024-06-12T15:19:00Z'
        },
      ]
    },
    {
      id: 3,
      name: 'Michael Johnson',
      user: {
        id: 3,
        username: 'Michael Johnson',
        icon: 'assets/pictures/story/5.jpg',
        createdAt: '2024-06-10T09:30:00Z'
      },
      avatar: 'assets/pictures/img_2.png',
      lastMessage: 'Let me know how it goes!',
      conversation: [
        {text: 'Hey Michael, did you finish the report?', sent: true, date: '2024-06-12T11:00:00Z'},
        {text: 'Hi, yes I did. I sent it over this morning.', sent: false, date: '2024-06-12T11:01:00Z'},
        {text: 'Great! I’ll review it shortly.', sent: true, date: '2024-06-12T11:02:00Z'},
        {text: 'Perfect. Let me know if you need any changes.', sent: false, date: '2024-06-12T11:03:00Z'},
        {text: 'Will do. By the way, have you heard about the new project?', sent: true, date: '2024-06-12T11:04:00Z'},
        {
          text: 'Yes, I heard it’s going to be quite challenging.',
          sent: false,
          date: '2024-06-12T11:05:00Z'
        },
        {
          text: 'Indeed. I’m excited to start working on it.',
          sent: true,
          date: '2024-06-12T11:06:00Z'
        },
        {text: 'Same here. Looking forward to the first meeting.', sent: false, date: '2024-06-12T11:07:00Z'},
        {text: 'Me too. Let’s catch up after the meeting.', sent: true, date: '2024-06-12T11:08:00Z'},
        {
          text: 'Definitely. Let me know how it goes!',
          sent: false,
          date: '2024-06-12T11:09:00Z'
        },
      ]
    },
    // Add more messages as needed
  ];


  getInstagramMessages(): Observable<Message[]> {
    return of(this.instagramMessages);
  }

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
