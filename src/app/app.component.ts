import { Component, OnInit, AfterViewInit } from '@angular/core';



declare var PatternLock: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'pattern-lock';
  matchedPattern = 5784;
  isMatched: boolean|null = null;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    const me = this;
    var p = new PatternLock(document.getElementById('lock'), {
        onPattern: function(pattern:any){
          if(pattern) {
            if(me.matchedPattern === pattern) {
              me.isMatched = true;
              this.success()
            } else {
              me.isMatched = false;
              this.error()
            }
          }
          
        }
    });
  }
  
}
