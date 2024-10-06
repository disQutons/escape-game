import {Component, Input} from '@angular/core';
import {Message} from "../../models/message.model";
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent {
  @Input() message: Message | undefined;
  @Input() showAvatarCircle: boolean = true;
  constructor(public messageService: MessageService) {}

}
