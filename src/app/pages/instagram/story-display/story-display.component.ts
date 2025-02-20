import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../models/story.model';

@Component({
  selector: 'app-story-display',
  templateUrl: './story-display.component.html',
  styleUrls: ['./story-display.component.css']
})
export class StoryDisplayComponent {
  @Input() story: User | undefined;
  @Output() close = new EventEmitter<void>();

  closeDisplay() {
    this.close.emit();
  }
}
