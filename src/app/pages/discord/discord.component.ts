import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/story.model';

@Component({
  selector: 'app-discord',
  templateUrl: './discord.component.html',
  styleUrls: ['./discord.component.css'],
  animations: [
    trigger('slideMessages', [
      state('show', style({ transform: 'translateX(0)' })),
      state('hide', style({ transform: 'translateX(100%)' })),
      transition('show <=> hide', animate('300ms ease-in-out')),
    ]),
    trigger('slideConversation', [
      state('show', style({ transform: 'translateX(0)' })),
      state('hide', style({ transform: 'translateX(100%)' })),
      transition('show <=> hide', animate('300ms ease-in-out')),
    ]),
  ],
})
export class DiscordComponent {
  showMessages: boolean = true;
  selectedMessage: Message | null = null;
  selectedMessageIndex: number = -1;
  isMessageIconSelected: boolean = true;
  currentUser: User = {
    id: 1,
    username: 'Chase',
    icon: 'https://api.dicebear.com/9.x/dylan/svg?seed=Chase',
    createdAt: new Date().toISOString(),
    status: 'online',
  };

  openConversation(event: { message: Message, index: number }) {
    this.selectedMessage = event.message;
    this.selectedMessageIndex = event.index;
  }

  closeConversation() {
    this.selectedMessage = null;
    this.selectedMessageIndex = -1;
  }

  onServerClicked() {
    this.showMessages = false;
    this.selectedMessage = null;
    this.isMessageIconSelected = false;
  }

  onMessageIconClicked() {
    this.showMessages = true;
    this.selectedMessage = null;
    this.isMessageIconSelected = true;
  }
}
