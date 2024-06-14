import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {PostModel} from "../models/post.model";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: PostModel[] = [
    {
      id: 1,
      caption: 'Exploring the mountains!',
      nbComments: 215,
      image:`assets/pictures/story/1.jpg`,
      views: 9876,
      placeholder: 'Denver',
      createdAt: '2024-06-10T08:15:00Z',
      user: {
        id: 1,
        username: 'John Doe',
        icon: 'assets/pictures/story/1.jpg',
        createdAt: '2024-06-10T08:15:00Z'
      }
    },
    {
      id: 2,
      image:'assets/pictures/story/2.jpg',
      caption: 'Delicious homemade pizza',
      nbComments: 158,
      views: 8453,
      placeholder: 'Naples',
      createdAt: '2024-06-11T12:45:30Z',
      user: {
        id: 2,
        username: 'Emma Johnson',
        icon: 'assets/pictures/story/2.jpg',
        createdAt: '2024-06-11T12:45:30Z'
      }
    },
    {
      id: 3,
      image:'assets/pictures/story/3.jpg',
      caption: 'Sunny days at the beach',
      nbComments: 284,
      views: 12354,
      placeholder: 'Malibu',
      createdAt: '2024-06-09T14:20:00Z',
      user: {
        id: 3,
        username: 'Liam Brown',
        icon: 'assets/pictures/story/3.jpg',
        createdAt: '2024-06-09T14:20:00Z'
      }
    },
    {
      id: 4,
      image:'assets/pictures/story/4.jpg',
      caption: 'Stunning city lights',
      nbComments: 198,
      views: 10987,
      placeholder: 'New York',
      createdAt: '2024-06-08T20:30:25Z',
      user: {
        id: 4,
        username: 'Olivia Williams',
        icon: 'assets/pictures/story/4.jpg',
        createdAt: '2024-06-08T20:30:25Z'
      }
    },
    {
      id: 5,
      caption: 'Morning coffee vibes',
      image:'assets/pictures/story/5.jpg',
      nbComments: 123,
      views: 9321,
      placeholder: 'Seattle',
      createdAt: '2024-06-07T09:00:00Z',
      user: {
        id: 5,
        username: 'Noah Jones',
        icon: 'assets/pictures/story/5.jpg',
        createdAt: '2024-06-07T09:00:00Z'
      }
    },
    {
      id: 6,
      caption: 'Adventures in the forest',
      image:'assets/pictures/story/6.jpg',
      nbComments: 246,
      views: 10112,
      placeholder: 'Yosemite',
      createdAt: '2024-06-06T16:50:10Z',
      user: {
        id: 6,
        username: 'Sophia Garcia',
        icon: 'assets/pictures/story/6.jpg',
        createdAt: '2024-06-06T16:50:10Z'
      }
    },
    {
      id: 7,
      caption: 'Architecture wonder',
      image:'assets/pictures/story/7.jpg',
      nbComments: 179,
      views: 8756,
      placeholder: 'Barcelona',
      createdAt: '2024-06-05T18:25:45Z',
      user: {
        id: 7,
        username: 'William Martinez',
        icon: 'assets/pictures/story/7.jpg',
        createdAt: '2024-06-05T18:25:45Z'
      }
    }
  ];



  getposts(): Observable<PostModel[]> {
    return of(this.posts);
  }
}
