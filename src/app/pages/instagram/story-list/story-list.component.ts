import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/story.model';
import { StoryService } from '../../../service/story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css'],
})
export class StoryListComponent implements OnInit {
  stories: User[] = [];
  activeStory: User | null = null;

  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
    this.storyService.getStories().subscribe((stories) => {
      this.stories = stories;
    });
  }

  displayStory(story: User): void {
    this.activeStory = story;
  }

  closeStory(): void {
    this.activeStory = null;
  }
}
