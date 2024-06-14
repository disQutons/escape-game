import {Component, Input} from '@angular/core';
import {User} from "../../../models/story.model";

@Component({
  selector: 'app-story-circle',
  templateUrl: './story-circle.component.html',
  styleUrls: ['./story-circle.component.css']
})
export class StoryCircleComponent {
  @Input() story: User | undefined;
  @Input() size: number = 80;
}
