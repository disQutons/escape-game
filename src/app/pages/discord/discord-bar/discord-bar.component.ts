import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/story.model';

@Component({
  selector: 'app-discord-bar',
  templateUrl: './discord-bar.component.html',
  styleUrls: ['./discord-bar.component.css']
})
export class DiscordBarComponent {
  @Input() currentUser!: User;
}