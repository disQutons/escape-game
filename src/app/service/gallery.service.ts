import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {GalleryImageModel} from "../models/gallery.image.model";


@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private images: GalleryImageModel[] = [
    {
      id: 1,
      previewUrl:`assets/pictures/story/thumbnail/1.jpg`,
      srcUrl:`assets/pictures/story/1.jpg`,
    },
    {
      id: 2,
      previewUrl:`assets/pictures/story/thumbnail/2.jpg`,
      srcUrl:`assets/pictures/story/2.jpg`,
    },
    {
      id: 3,
      previewUrl:`assets/pictures/story/thumbnail/3.jpg`,
      srcUrl:`assets/pictures/story/3.jpg`,
    },
    {
      id: 4,
      previewUrl:`assets/pictures/story/thumbnail/4.jpg`,
      srcUrl:`assets/pictures/story/4.jpg`,
    },
    {
      id: 5,
      previewUrl:`assets/pictures/story/thumbnail/5.jpg`,
      srcUrl:`assets/pictures/story/5.jpg`,
    },
    {
      id: 6,
      previewUrl:`assets/pictures/story/thumbnail/6.jpg`,
      srcUrl:`assets/pictures/story/6.jpg`,
    },
    {
      id: 7,
      previewUrl:`assets/pictures/story/thumbnail/7.jpg`,
      srcUrl:`assets/pictures/story/7.jpg`,
    },

  ];



  getImages(): Observable<GalleryImageModel[]> {
    return of(this.images);
  }
}
