import {Component, OnInit} from '@angular/core';
import {Story} from "../../../models/story.model";
import {StoryService} from "../../../service/story.service";

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  stories: Story[] = []

  constructor(private storyService: StoryService) {
  }

  ngOnInit(): void {
    this.storyService.getStories().subscribe({
      next: (data) => {
        this.stories = data;
      }
    })
  }

}
