import {Component, OnInit} from '@angular/core';
import {AppService} from "../../service/app.service";
import {App} from "../../models/app.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.css']
})

export class AppGridComponent implements OnInit {
  apps : App[] = [];

  constructor(private appService: AppService, private router: Router) {
    this.apps = appService.getApps();
  }

  ngOnInit(): void {
  }

  openApp(app:App){
    this.router.navigate(['/'+app.name]);
  }

}

