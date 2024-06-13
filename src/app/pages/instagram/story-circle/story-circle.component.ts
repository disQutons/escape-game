import {Component, Input} from '@angular/core';
import {Story} from "../../../models/story.model";

@Component({
  selector: 'app-story-circle',
  templateUrl: './story-circle.component.html',
  styleUrls: ['./story-circle.component.css']
})
export class StoryCircleComponent {
  @Input() story: Story | undefined;
  @Input() size: number = 80;
}
