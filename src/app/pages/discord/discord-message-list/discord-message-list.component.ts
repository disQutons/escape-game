import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { Message, MessageContent } from 'src/app/models/message.model';
import { User } from 'src/app/models/story.model';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-discord-message-list',
  templateUrl: './discord-message-list.component.html',
  styleUrls: ['./discord-message-list.component.css'],
})
export class DiscordMessageListComponent implements OnInit {
  messages: Message[] = [];
  searchQuery: string = '';
  isSearchActive: boolean = false;
  searchResults: { message: Message, messageContent: MessageContent }[] = [];
  @Input() currentUser!: User;
  @Output() messageSelected = new EventEmitter<{message: Message, index: number}>();
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(public messageService: MessageService) {}

  ngOnInit() {
    this.messageService
      .getMessagesByPlatform('discord')
      .subscribe((messages) => {
        this.messages = messages;
      });
  }

  selectMessage(message: Message) {
    this.messageSelected.emit({message, index: -1});
  }

  selectSearchResult(message: Message, messageContent: MessageContent) {
    const index = message.conversation.findIndex(item => item === messageContent);
    this.messageSelected.emit({message, index});
  }

  toggleSearch() {
    this.isSearchActive = !this.isSearchActive;
    if (this.isSearchActive) {
      setTimeout(() => {
        this.searchInput.nativeElement.focus();
      }, 0);
    } else {
      this.searchQuery = '';
      this.searchMessages();
    }
  }

  searchMessages() {
    if (this.searchQuery.trim() === '') {
      this.searchResults = [];
      return;
    }

    this.searchResults = this.messages.flatMap(message => 
      message.conversation
        .filter(item => item.content.toLowerCase().includes(this.searchQuery.toLowerCase()))
        .map(item => ({ message, messageContent: item }))
    );
  }

  onSearchBlur() {
    if (this.searchQuery.trim() === '') {
      this.isSearchActive = false;
      this.searchResults = [];
    }
  }

  addFriend() {
    console.log('Add friend clicked');
  }

  getTimeAgo(date: string): string {
    const now = new Date();
    const messageDate = new Date(date);
    const diffInSeconds = Math.floor((now.getTime() - messageDate.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'à l\'instant';
    if (diffInSeconds < 3600) return `il y a ${Math.floor(diffInSeconds / 60)}m`;
    if (diffInSeconds < 86400) return `il y a ${Math.floor(diffInSeconds / 3600)}h`;
    return `il y a ${Math.floor(diffInSeconds / 86400)}j`;
  }
}