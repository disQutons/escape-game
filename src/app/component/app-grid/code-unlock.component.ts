import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-code-unlock',
  templateUrl: './code-unlock.component.html',
  styleUrls: ['./code-unlock.component.css'],
})
export class CodeUnlockComponent implements OnInit {
  @Input() appToUnlock: string = '';
  @Output() unlocked = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  unlockForm: FormGroup;
  error = false;
  hideCode = true;

  constructor(private appService: AppService) {
    this.unlockForm = new FormGroup({
      code: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.unlockForm.valid) {
      const code = this.unlockForm.get('code')?.value;
      if (
        code &&
        (this.appToUnlock === 'instagram' || this.appToUnlock === 'discord')
      ) {
        if (this.appService.checkCode(this.appToUnlock, code)) {
          this.appService.unlockApp(this.appToUnlock);
          this.error = false;
          this.unlocked.emit();
          this.close.emit();
        } else {
          this.error = true;
          this.unlockForm.reset();
        }
      }
    }
  }

  togglePasswordVisibility(): void {
    this.hideCode = !this.hideCode;
  }

  onCloseClick(event: Event): void {
    event.stopPropagation();
    this.close.emit();
  }
}
