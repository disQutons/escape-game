// message.service.ts
import { Injectable } from '@angular/core';
import {Message} from "../models/message.model";


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: Message[] = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'assets/pictures/img.png',
      lastMessage: 'Hey, how are you?',
      conversation: [
        { text: 'Hey, how are you?', sent: true },
        { text: 'I am good, how about you?', sent: false },
      ]
    },
    {
      id: 2,
      name: 'John Doe',
      avatar: 'assets/pictures/img.png',
      lastMessage: 'Hey, how are you?',
      conversation: [
        { text: 'Hey, how are you?', sent: true },
        { text: 'I am good, how about you?', sent: false },
      ]
    },
    // Add more messages as needed
  ];

  getMessages(): Message[] {
    return this.messages;
  }

  sendMessage(messageId: number, text: string): void {
    const message = this.messages.find(m => m.id === messageId);
    console.log(message)
    if (message) {
      message.conversation.push({ text, sent: true });
      message.lastMessage = text;
    }
  }
}
