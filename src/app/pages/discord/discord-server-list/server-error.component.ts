import { Component } from '@angular/core';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class DiscordServerErrorComponent {
  errorGifUrl = 'assets/pictures/apps/discord404.gif';
}