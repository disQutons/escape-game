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
