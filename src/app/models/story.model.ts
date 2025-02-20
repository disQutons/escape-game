export interface User {
  id: number;
  username: string;
  icon: string;
  createdAt: string;
  status?: 'online' | 'offline' | 'idle' | 'dnd';
  storyImage?: string;
}
