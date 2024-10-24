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
      caption: 'Super concert samedi avec tous les potes !',
      nbComments: 12,
      image:`assets/pictures/story/soiree.jpg`,
      views: 76,
      placeholder: 'Savenay',
      createdAt: '2024-11-10T08:15:00Z',
      user: {
        id: 1,
        username: 'Antoine',
        icon: 'assets/pictures/story/antoine_profil.jpg',
        createdAt: '2024-11-10T08:15:00Z'
      }
    },
    {
      id: 2,
      image:'assets/pictures/story/tennisproplayer.jpg',
      caption: 'Sauras-tu battre les meilleurs, en double lors du tournois Diamant ? Tiens-toi prêt !',
      nbComments: 158,
      views: 8453,
      placeholder: 'Online',
      createdAt: '2024-06-11T12:45:30Z',
      user: {
        id: 2,
        username: 'TennisProPlayer',
        icon: 'assets/pictures/story/tennisproplayer.jpg',
        createdAt: '2024-06-11T12:45:30Z'
      }
    }
  ];



  getposts(): Observable<PostModel[]> {
    return of(this.posts);
  }
}
