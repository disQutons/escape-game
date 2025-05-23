import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DiscordComponent } from './discord.component';
import { DiscordBarComponent } from './discord-bar/discord-bar.component';
import { DiscordServerListComponent } from './discord-server-list/discord-server-list.component';
import { DiscordMessageListComponent } from './discord-message-list/discord-message-list.component';
import { DiscordConversationComponent } from './discord-conversation/discord-conversation.component';
import { DiscordServerErrorComponent } from './discord-server-list/server-error.component';
import { HighlightPipe } from '../../../app/pipe/highlight.pipe';
import { SharedModule } from '../../../app/shared.module';

@NgModule({
  declarations: [
    DiscordComponent,
    DiscordBarComponent,
    DiscordServerListComponent,
    DiscordMessageListComponent,
    DiscordConversationComponent,
    DiscordServerErrorComponent,
    HighlightPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    DiscordComponent
  ]
})
export class DiscordModule { }