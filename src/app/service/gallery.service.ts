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
      previewUrl:`assets/pictures/story/thumbnail/freres.jpg`,
      srcUrl:`assets/pictures/story/freres.jpg`,
    },
    {
      id: 2,
      previewUrl:`assets/pictures/story/thumbnail/couture.jpg`,
      srcUrl:`assets/pictures/story/couture.jpg`,
    },
    {
      id: 3,
      previewUrl:`assets/pictures/story/thumbnail/soiree.jpg`,
      srcUrl:`assets/pictures/story/soiree.jpg`,
    },
    {
      id: 4,
      previewUrl:`assets/pictures/story/thumbnail/antoine_selfie.jpg`,
      srcUrl:`assets/pictures/story/antoine_selfie.jpg`,
    },
    {
      id: 5,
      previewUrl:`assets/pictures/story/thumbnail/mamie.jpg`,
      srcUrl:`assets/pictures/story/mamie.jpg`,
    },
    {
      id: 6,
      previewUrl:`assets/pictures/story/thumbnail/tennis.jpg`,
      srcUrl:`assets/pictures/story/tennis.jpg`,
    },
  ];



  getImages(): Observable<GalleryImageModel[]> {
    return of(this.images);
  }
}
