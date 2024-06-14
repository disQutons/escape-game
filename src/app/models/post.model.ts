import {User} from "./story.model";

export interface PostModel {
  id: number;
  user: User;
  caption: string;
  image:string;
  createdAt: string;
  placeholder: string;
  views: number;
  nbComments: number;
}
