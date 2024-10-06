import {Component, OnInit} from '@angular/core';
import {Message} from "../../models/message.model";
import {MessageService} from "../../service/message.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit{
  selectedMessage: Message | null = null;
  newMessage: string = '';

  constructor(private route: ActivatedRoute,private messageService: MessageService) { }

  ngOnInit(): void {
    this.selectedMessage = history.state.data;
  }
  sendMessage(): void {
    if (this.selectedMessage) {
      const text = this.newMessage;
      const date = (new Date()).toISOString();
      this.messageService.sendMessage(this.selectedMessage.id, this.newMessage, "text",date);
      this.selectedMessage.conversation.push({content: text, type: "text", date: date, sent: true});
      this.newMessage = '';
    }
  }
}
