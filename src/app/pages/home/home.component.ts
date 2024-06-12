import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  patternMatch = false;

  constructor() {
  }



  ngOnInit(): void {
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('patternMatch')
    });
    const storedValue = localStorage.getItem('patternMatch');
    this.patternMatch = storedValue ? JSON.parse(storedValue) : false;
  }

  onPatternSuccess: () => void = () => {
    this.patternMatch = true;
    localStorage.setItem('patternMatch', JSON.stringify(true));
  }


}
