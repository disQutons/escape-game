import {Story} from "./story.model";

export interface Message {
  id: number;
  user: Story;
  name: string;
  avatar: string;
  lastMessage: string;
  conversation: {
    text: string;
    sent: boolean;
    date: string;
  }[];
}
