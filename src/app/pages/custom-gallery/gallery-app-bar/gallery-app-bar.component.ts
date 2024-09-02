import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gallery-app-bar',
  templateUrl: './gallery-app-bar.component.html',
  styleUrls: ['./gallery-app-bar.component.css']
})
export class GalleryAppBarComponent {
  constructor(private location: Location) { }

  handleBackClick() {
    this.location.back();
  }
}
