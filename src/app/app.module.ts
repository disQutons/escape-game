import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PatternLockComponent } from './component/pattern-lock/pattern-lock.component';
import { ClockComponent } from './component/clock/clock.component';
import { BarComponent } from './component/bar/bar.component';
import { CommonModule, NgOptimizedImage, LocationStrategy, HashLocationStrategy } from "@angular/common";
import { AppGridComponent } from './component/app-grid/app-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from "@angular/material/grid-list";
import { FlexLayoutModule } from "@angular/flex-layout";
import { InstagramComponent } from './pages/instagram/instagram.component';
import { MessageListComponent } from './component/message-list/message-list.component';
import { MessageDetailComponent } from './component/message-detail/message-detail.component';
import { MessageItemComponent } from './component/message-item/message-item.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoadingComponent } from './component/loading/loading.component';
import { StoryCircleComponent } from './pages/instagram/story-circle/story-circle.component';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerModule, HammerGestureConfig } from '@angular/platform-browser';
import { FeedsComponent } from './pages/instagram/feeds/feeds.component';
import { StoryListComponent } from './pages/instagram/story-list/story-list.component';
import { LazyLoadImageModule } from "ng-lazyload-image";
import { MatIconModule } from "@angular/material/icon";
import { InstagramUpBarComponent } from './pages/instagram/instagram-up-bar/instagram-up-bar.component';
import { MatButtonModule } from "@angular/material/button";
import { InstagramPostComponent } from './pages/instagram/instagram-post/instagram-post.component';
import { InstagramPostListComponent } from './pages/instagram/instagram-post-list/instagram-post-list.component';
import { CustomGalleryComponent } from './pages/custom-gallery/custom-gallery.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { LightboxModule } from "@ngx-gallery/lightbox";
import { GalleryModule } from "@ngx-gallery/core";
import { GalleryAppBarComponent } from './pages/custom-gallery/gallery-app-bar/gallery-app-bar.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { DiscordModule } from './pages/discord/discord.module';
import { PhoneComponent } from './pages/phone/phone.component';
import { CodeUnlockComponent } from './component/app-grid/code-unlock.component';
import { GameEndModalComponent } from './component/game-end-modal/game-end-modal.component';
import { SharedModule } from './shared.module';

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
    StoryListComponent,
    InstagramUpBarComponent,
    InstagramPostComponent,
    InstagramPostListComponent,
    CustomGalleryComponent,
    GalleryAppBarComponent,
    MessagesComponent,
    PhoneComponent,
    CodeUnlockComponent,
    GameEndModalComponent
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
    HammerModule,
    LazyLoadImageModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    GalleryModule,
    LightboxModule,
    DiscordModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }