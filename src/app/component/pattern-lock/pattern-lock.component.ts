import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
declare var PatternLock: any;
@Component({
  selector: 'app-pattern-lock',
  templateUrl: './pattern-lock.component.html',
  styleUrls: ['./pattern-lock.component.css']
})
export class PatternLockComponent implements OnInit, AfterViewInit{
  @Input() onSuccess!: () => void;

  title = 'pattern-lock';
  matchedPattern = 5784;
  isMatched: boolean|null = null;


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const me = this;
    const p = new PatternLock(document.getElementById('lock'), {
      onPattern: function (pattern: any) {
        if (pattern) {
          if (me.matchedPattern === pattern) {
            me.isMatched = true;
            if (me.onSuccess){
              me.onSuccess()
              this.success()
            }
          } else {
            me.isMatched = false;
            this.error()
          }
        }

      }
    });
  }
}
