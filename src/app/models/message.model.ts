export interface Message {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  conversation: {
    text: string;
    sent: boolean;
    date: string;
  }[];
}
