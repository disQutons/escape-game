import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.css']
})

export class AppGridComponent implements OnInit {
  apps = [
    { name: 'Instagram', icon: 'assets/pictures/apps/instagram.png' },
    { name: 'Discord', icon: 'assets/pictures/apps/discorde.png' },
    { name: 'Messages', icon: 'assets/pictures/apps/messages.png' },
    { name: 'Telephone', icon: 'assets/pictures/apps/appel.png' },
    { name: 'Galerie', icon: 'assets/pictures/apps/photo.png' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

