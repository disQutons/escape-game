import {Component} from '@angular/core';
import { RefreshDetectionService } from './services/refresh-detection.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private refreshDetectionService: RefreshDetectionService) {}

  ngOnInit() {
    this.refreshDetectionService.detectAndRedirect();
  }
}
