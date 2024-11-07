import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavBarComponent } from './component/bottom-nav-bar/bottom-nav-bar.component';

@NgModule({
  declarations: [
    BottomNavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BottomNavBarComponent
  ]
})
export class SharedModule { }