import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {PatternLockComponent} from './component/pattern-lock/pattern-lock.component';
import {ClockComponent} from './component/clock/clock.component';
import {BarComponent} from './component/bar/bar.component';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {AppGridComponent} from './component/app-grid/app-grid.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from "@angular/flex-layout";
import {InstagramComponent} from './pages/instagram/instagram.component';
import {MessageListComponent} from './component/message-list/message-list.component';
import {MessageDetailComponent} from './component/message-detail/message-detail.component';
import {MessageItemComponent} from './component/message-item/message-item.component';
import {FormsModule} from "@angular/forms";
import {LoadingComponent} from './component/loading/loading.component';
import {StoryCircleComponent} from './pages/instagram/story-circle/story-circle.component';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerModule, HammerGestureConfig } from '@angular/platform-browser';
import { FeedsComponent } from './pages/instagram/feeds/feeds.component';
import { StoryListComponent } from './pages/instagram/story-list/story-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatternLockComponent,
    ClockComponent,
    BarComponent,
    AppGridComponent,
    InstagramComponent,
    MessageListComponent,
    MessageDetailComponent,
    MessageItemComponent,
    LoadingComponent,
    StoryCircleComponent,
    FeedsComponent,
    StoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FlexLayoutModule,
    FormsModule,
    NgOptimizedImage,
    HammerModule
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerGestureConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
