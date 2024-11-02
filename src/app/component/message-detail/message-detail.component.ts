import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Message } from "../../models/message.model";
import { MessageService } from "../../service/message.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  selectedMessage: Message | null = null;
  newMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.selectedMessage = history.state.data;
    setTimeout(() => this.scrollToBottom(), 100);
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  sendMessage(): void {
    if (this.selectedMessage && this.newMessage.trim()) {
      const text = this.newMessage;
      const date = (new Date()).toISOString();
      this.messageService.sendMessage(this.selectedMessage.id, this.newMessage, "text", date, 'generic')
        .subscribe(hint => {
          this.selectedMessage?.conversation.push({content: text, type: "text", date: date, sent: true});
          if (hint) {
            this.selectedMessage?.conversation.push({content: hint, type: "text", date: new Date().toISOString(), sent: false});
          }
          this.newMessage = '';
          setTimeout(() => this.scrollToBottom(), 100);
        });
    }
  }
}