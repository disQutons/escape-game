import {Component, Input} from '@angular/core';
import {Message} from "../../models/message.model";

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent {
  @Input() message: Message | undefined;
  @Input() showAvatarCircle: boolean = true;
}
