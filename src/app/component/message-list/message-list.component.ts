import {Component, OnInit} from '@angular/core';
import {Message} from "../../models/message.model";
import {MessageService} from "../../service/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];
  selectedMessage: Message | null = null;

  constructor(private route: Router,private messageService: MessageService) { }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }

  selectMessage(message: Message): void {
    this.route.navigate(['/massage-detail', message.id], { state: { data: message } });
  }
}
