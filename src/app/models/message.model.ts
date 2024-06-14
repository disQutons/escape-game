import {User} from "./story.model";

export interface Message {
  id: number;
  user: User;
  name: string;
  avatar: string;
  lastMessage: string;
  conversation: {
    text: string;
    sent: boolean;
    date: string;
  }[];
}
