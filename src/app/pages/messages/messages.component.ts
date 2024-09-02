import {Component, OnInit} from '@angular/core';
import {Message} from "../../models/message.model";
import {Router} from "@angular/router";
import {MessageService} from "../../service/message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];
  isLoading: boolean = true;

  constructor(private route: Router, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageService.getMessages().subscribe({
      next: (data) => {
        this.messages = data
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  selectMessage(message: Message): void {
    this.route.navigate(['/massage-detail', message.id], {state: {data: message}});
  }
}
