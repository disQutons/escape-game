import {Component, OnInit} from '@angular/core';
import {Gallery, GalleryItem, ImageItem} from "@ngx-gallery/core";
import {GalleryService} from "../../service/gallery.service";


@Component({
  selector: 'app-custom-gallery',
  templateUrl: './custom-gallery.component.html',
  styleUrls: ['./custom-gallery.component.css']
})
export class CustomGalleryComponent implements OnInit {

  items: GalleryItem[] = [];

  constructor(private gallery: Gallery, private galleryService: GalleryService) {
  }

  ngOnInit() {
    this.galleryService.getImages().subscribe({
      next: (data) => {
        this.items = data.map(item =>
          new ImageItem({src: item.srcUrl, thumb: item.previewUrl})
        );
        this.gallery.ref().load(this.items);
      }
    })
  }
}
