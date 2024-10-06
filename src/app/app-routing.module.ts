import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {InstagramComponent} from "./pages/instagram/instagram.component";
import {MessageDetailComponent} from "./component/message-detail/message-detail.component";
import {CustomGalleryComponent} from "./pages/custom-gallery/custom-gallery.component";
import {MessagesComponent} from "./pages/messages/messages.component";
import { DiscordComponent } from './pages/discord/discord.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'instagram', component: InstagramComponent },
  { path: 'discord', component: DiscordComponent },
  { path: 'gallery', component: CustomGalleryComponent},
  { path: 'messages', component: MessagesComponent},
  { path: 'massage-detail/:id', component: MessageDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
