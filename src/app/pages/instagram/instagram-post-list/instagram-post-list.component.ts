import {Component} from '@angular/core';
import {PostModel} from "../../../models/post.model";
import {PostService} from "../../../service/post.service";

@Component({
  selector: 'app-instagram-post-list',
  templateUrl: './instagram-post-list.component.html',
  styleUrls: ['./instagram-post-list.component.css']
})
export class InstagramPostListComponent {
  posts: PostModel[] = []

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getposts().subscribe({
      next: (data) => {
        this.posts = data;
      }
    })
  }
}
