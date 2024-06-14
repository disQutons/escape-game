import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../../../models/post.model";

@Component({
  selector: 'app-instagram-post',
  templateUrl: './instagram-post.component.html',
  styleUrls: ['./instagram-post.component.css']
})
export class InstagramPostComponent implements OnInit{
  @Input() post: PostModel | undefined;

  ngOnInit(): void {
    console.log(this.post)
  }
}
