import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/story.model';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-discord-conversation',
  templateUrl: './discord-conversation.component.html',
  styleUrls: ['./discord-conversation.component.css']
})
export class DiscordConversationComponent implements OnInit, AfterViewChecked, OnChanges {
  @Input() message!: Message;
  @Input() currentUser!: User;
  @Input() scrollToIndex: number = -1;
  @Output() backClicked = new EventEmitter<void>();
  @ViewChild('conversationMessages') private messagesContainer!: ElementRef;
  
  newMessage: string = '';
  private scrollToBottomNeeded = true;
  private scrollToIndexPending: number = -1;

  constructor(public messageService: MessageService) {}

  ngOnInit() {
    this.scrollToIndexPending = this.scrollToIndex;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['scrollToIndex'] && !changes['scrollToIndex'].firstChange) {
      this.scrollToIndexPending = this.scrollToIndex;
    }
  }

  ngAfterViewChecked() {
    if (this.scrollToIndexPending >= 0) {
      this.scrollToMessage(this.scrollToIndexPending);
      this.scrollToIndexPending = -1;
    } else if (this.scrollToBottomNeeded) {
      this.scrollToBottom();
    }
  }

  scrollToMessage(index: number): void {
    const messageElement = document.getElementById(`message-${index}`);
    if (!messageElement || !this.messagesContainer) return;
  
    const container = this.messagesContainer.nativeElement;
    const messagePosition = messageElement.offsetTop;
  
    setTimeout(() => {
      container.scrollTop = messagePosition - container.offsetHeight / 2;
    }, 100); //Wait DOM to render
  }

  scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      this.scrollToBottomNeeded = false;
    } catch(err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

  goBack() {
    this.backClicked.emit();
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messageService.sendMessage(this.message.id, this.newMessage, "text", new Date().toISOString(), 'discord');
      this.newMessage = '';
      this.scrollToBottomNeeded = true;
    }
  }
}