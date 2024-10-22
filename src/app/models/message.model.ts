import {User} from "./story.model";

export interface MessageContent {
  type: 'text' | 'image';
  content: string;
  sent: boolean;
  date: string;
}

export interface Message {
  id: number;
  user: User;
  name: string;
  avatar: string;
  conversation: MessageContent[];
}