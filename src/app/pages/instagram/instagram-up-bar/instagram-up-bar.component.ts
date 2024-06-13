import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-instagram-up-bar',
  templateUrl: './instagram-up-bar.component.html',
  styleUrls: ['./instagram-up-bar.component.css']
})
export class InstagramUpBarComponent {
  @Input() onMessageClick!: () => void;

  handleMessageClick() {
    this.onMessageClick();
  }
}
