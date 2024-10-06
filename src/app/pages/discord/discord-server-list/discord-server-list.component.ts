import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

interface Server {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-discord-server-list',
  templateUrl: './discord-server-list.component.html',
  styleUrls: ['./discord-server-list.component.css'],
})
export class DiscordServerListComponent implements OnInit {
  servers: Server[] = [];
  @Input() isMessageIconSelected: boolean = true;
  @Output() serverClicked = new EventEmitter<Server>();
  @Output() messageIconClicked = new EventEmitter<void>();

  ngOnInit() {
    this.servers = [
      { icon: 'https://api.dicebear.com/9.x/icons/svg?seed=Vivian', name: 'Server 1' },
      { icon: 'https://api.dicebear.com/9.x/shapes/svg?seed=Nolan', name: 'Server 2' },
      { icon: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Katherine', name: 'Server 3' },
      { icon: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Sophia', name: 'Server 4' },
      { icon: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Wyatt', name: 'Server 5' },
      { icon: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Katherine', name: 'Server 6' },
    ];
  }

  onServerClick(server: Server) {
    this.serverClicked.emit(server);
  }

  onMessageIconClick() {
    this.messageIconClicked.emit();
  }
}