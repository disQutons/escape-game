import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message, MessageContent } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private instagramMessages: Message[] = [
    {
      id: 1,
      user: {
        id: 1,
        username: 'Alice Smith',
        icon: `assets/pictures/story/1.jpg`,
        createdAt: '2024-06-12T10:20:30Z'
      },
      name: 'Alice Smith',
      avatar: 'assets/pictures/img.png',
      conversation: [
        { type: 'text', content: 'Hey, how are you?', sent: true, date: '2024-06-12T10:20:30Z' },
        { type: 'text', content: 'I am good, how about you?', sent: false, date: '2024-06-12T10:21:00Z' },
        { type: 'text', content: 'I am doing well, thanks for asking!', sent: true, date: '2024-06-12T10:21:30Z' },
        { type: 'text', content: 'What have you been up to lately?', sent: true, date: '2024-06-12T10:22:00Z' },
        { type: 'text', content: 'Just the usual, work and a bit of relaxation. You?', sent: false, date: '2024-06-12T10:22:30Z' },
        { type: 'text', content: 'Same here. Have you watched any good movies recently?', sent: true, date: '2024-06-12T10:23:00Z' },
        { type: 'text', content: 'Yes, I saw a great sci-fi film last weekend.', sent: false, date: '2024-06-12T10:23:30Z' },
        { type: 'text', content: 'Sounds interesting! What was it called?', sent: true, date: '2024-06-12T10:24:00Z' },
        { type: 'text', content: 'It was called "Future Worlds". Highly recommend it!', sent: false, date: '2024-06-12T10:24:30Z' },
        { type: 'text', content: 'I will definitely check it out. Thanks for the recommendation!', sent: true, date: '2024-06-12T10:25:00Z' },
      ]
    },
    {
      id: 2,
      name: 'Alexandre Dano',
      user: {
        id: 2,
        username: 'Alexandre Dano',
        icon: `assets/pictures/story/2.jpg`,
        createdAt: '2024-06-11T15:45:00Z'
      },
      avatar: 'assets/pictures/img_1.png',
      conversation: [
        { type: 'text', content: 'Hi there! Long time no see.', sent: true, date: '2024-06-12T15:10:00Z' },
        { type: 'text', content: "Hey! Yes, it's been a while. How have you been?", sent: false, date: '2024-06-12T15:11:00Z' },
        { type: 'text', content: 'Pretty good, thanks. Just got back from a trip.', sent: true, date: '2024-06-12T15:12:00Z' },
        { type: 'text', content: "That's awesome! Where did you go?", sent: false, date: '2024-06-12T15:13:00Z' },
        { type: 'text', content: 'Went to Japan. It was an amazing experience!', sent: true, date: '2024-06-12T15:14:00Z' },
        { type: 'text', content: "Wow, I've always wanted to visit Japan. What was your favorite part?", sent: false, date: '2024-06-12T15:15:00Z' },
        { type: 'text', content: 'The culture and the food were incredible. Visited a lot of temples too.', sent: true, date: '2024-06-12T15:16:00Z' },
        { type: 'text', content: "Sounds fantastic! I'll have to add it to my travel list.", sent: false, date: '2024-06-12T15:17:00Z' },
        { type: 'text', content: 'You definitely should! How about you? Any plans for a trip?', sent: true, date: '2024-06-12T15:18:00Z' },
        { type: 'text', content: 'Thinking of going to Italy later this year. Fingers crossed!', sent: false, date: '2024-06-12T15:19:00Z' },
      ]
    },
  ];

  private discordMessages: Message[] = [
    {
      id: 1,
      user: {
        id: 1,
        username: 'Alice Smith',
        icon: 'https://api.dicebear.com/9.x/dylan/svg?seed=Alexander',
        createdAt: '2024-06-12T10:20:30Z',
        status: 'online'
      },
      name: 'Alice Smith',
      avatar: 'assets/icons/alice-avatar.png',
      conversation: [
        { type: 'text', content: "Salut tout le monde ! J'espère que vous allez bien. J'ai une super nouvelle à partager !", sent: true, date: '2024-06-12T10:20:30Z' },
        { type: 'text', content: "Hey Alice ! Ça fait plaisir de te voir. Quelle est cette nouvelle ?", sent: false, date: '2024-06-12T10:21:00Z' },
        { type: 'text', content: "J'ai été acceptée pour un stage d'été dans une grande entreprise tech !", sent: true, date: '2024-06-12T10:22:00Z' },
        { type: 'text', content: "Wow, c'est génial ! Félicitations ! Quelle entreprise ?", sent: false, date: '2024-06-12T10:23:00Z' },
        { type: 'text', content: "Merci ! C'est chez TechInnovate, une startup qui travaille sur l'IA et la réalité augmentée.", sent: true, date: '2024-06-12T10:24:00Z' },
        { type: 'text', content: "Impressionnant ! Tu vas travailler sur quoi exactement ?", sent: false, date: '2024-06-12T10:25:00Z' },
        { type: 'text', content: "Je vais participer au développement d'une application de réalité augmentée pour l'éducation. Voici un aperçu du projet :", sent: true, date: '2024-06-12T10:26:00Z' },
        { type: 'image', content: 'https://images.freeimages.com/images/large-previews/4c9/sunset-1361277.jpg', sent: true, date: '2024-06-12T10:26:30Z' },
        { type: 'text', content: "C'est vraiment cool ! Ça a l'air d'un projet passionnant.", sent: false, date: '2024-06-12T10:27:00Z' },
        { type: 'text', content: "Oui, je suis super excitée ! J'ai hâte de commencer et d'apprendre plein de nouvelles choses.", sent: true, date: '2024-06-12T10:28:00Z' },
        { type: 'text', content: "Tu commences quand ? Et c'est pour combien de temps ?", sent: false, date: '2024-06-12T10:29:00Z' },
        { type: 'text', content: "Je commence dans deux semaines et c'est pour tout l'été, soit environ 3 mois.", sent: true, date: '2024-06-12T10:30:00Z' },
        { type: 'text', content: "Super ! Tu vas sûrement beaucoup apprendre. N'oublie pas de nous tenir au courant de tes aventures !", sent: false, date: '2024-06-12T10:31:00Z' },
        { type: 'text', content: "Bien sûr ! Je partagerai mes expériences. D'ailleurs, voici le logo de l'entreprise :", sent: true, date: '2024-06-12T10:32:00Z' },
        { type: 'image', content: 'https://images.freeimages.com/images/large-previews/630/big-basin-morning-1523946.jpg', sent: true, date: '2024-06-12T10:32:30Z' },
        { type: 'text', content: "Il est vraiment sympa ! Moderne et dynamique, ça correspond bien à une entreprise tech.", sent: false, date: '2024-06-12T10:33:00Z' },
        { type: 'text', content: "Exactement ! Bon, je dois y aller, j'ai une réunion de préparation dans 10 minutes. Je vous tiens au courant !", sent: true, date: '2024-06-12T10:34:00Z' },
        { type: 'text', content: "D'accord, bonne chance pour ta réunion ! À bientôt !", sent: false, date: '2024-06-12T10:35:00Z' },
      ]
    },
    {
      id: 2,
      user: {
        id: 2,
        username: 'Alexandre Dano',
        icon: 'https://api.dicebear.com/9.x/dylan/svg?seed=Eden',
        createdAt: '2024-06-11T15:45:00Z',
        status: 'offline'
      },
      name: 'Alexandre Dano',
      avatar: 'assets/icons/nantskouille.png',
      conversation: [
        { type: 'text', content: 'Salut, comment ça va ?', sent: true, date: '2024-06-11T15:45:00Z' },
        { type: 'text', content: 'Ça va bien, merci ! Et toi ?', sent: false, date: '2024-06-11T15:46:00Z' },
        { type: 'text', content: 'Très bien aussi. Tu es connecté en cours demain du coup ?', sent: true, date: '2024-06-11T15:47:00Z' }
      ]
    },
    {
      id: 3,
      user: {
        id: 3,
        username: 'Michael Johnson',
        icon: 'https://api.dicebear.com/9.x/dylan/svg?seed=George',
        createdAt: '2024-06-10T09:30:00Z',
        status: 'idle'
      },
      name: 'Michael Johnson',
      avatar: 'assets/icons/jeudi-debouille.png',
      conversation: [
        { type: 'text', content: "Hey, quand est-ce qu'on se retrouve pour la soirée jeux ?", sent: true, date: '2024-06-10T09:30:00Z' },
        { type: 'text', content: 'Dans 30 minutes', sent: false, date: '2024-06-10T09:31:00Z' }
      ]
    },
    {
      id: 4,
      user: {
        id: 4,
        username: 'Emily Clark',
        icon: 'https://api.dicebear.com/9.x/dylan/svg?seed=Hannah',
        createdAt: '2024-06-09T18:15:00Z',
        status: 'dnd'
      },
      name: 'Emily Clark',
      avatar: 'assets/icons/nantskouille.png',
      conversation: [
        { type: 'text', content: 'Salut, comment ça va ?', sent: true, date: '2024-06-09T18:15:00Z' },
        { type: 'text', content: 'Ça va bien, merci ! Et toi ?', sent: false, date: '2024-06-09T18:16:00Z' },
        { type: 'text', content: 'Très bien aussi. Tu es connecté en cours demain du coup ?', sent: true, date: '2024-06-09T18:17:00Z' }
      ]
    }
  ];

  private messages: Message[] = [
    {
      id: 1,
      user: {
        id: 1,
        username: 'John Doe',
        icon: 'assets/pictures/story/3.jpg',
        createdAt: '2024-06-12T10:20:30Z'
      },
      name: 'John Doe',
      avatar: 'assets/pictures/img.png',
      conversation: [
        { type: 'text', content: 'Hi John, are you free this weekend?', sent: true, date: '2024-06-12T10:20:30Z' },
        { type: 'text', content: 'Hey, yes I am. Why do you ask?', sent: false, date: '2024-06-12T10:21:00Z' },
        { type: 'text', content: 'I was thinking of organizing a hiking trip.', sent: true, date: '2024-06-12T10:21:30Z' },
        { type: 'text', content: 'That sounds great! Count me in.', sent: false, date: '2024-06-12T10:22:00Z' },
        { type: 'text', content: "Awesome! I'll send you the details soon.", sent: true, date: '2024-06-12T10:22:30Z' },
        { type: 'text', content: 'Looking forward to it. Need any help with the planning?', sent: false, date: '2024-06-12T10:23:00Z' },
        { type: 'text', content: "Maybe with the logistics. I'll keep you posted.", sent: true, date: '2024-06-12T10:23:30Z' },
        { type: 'text', content: 'Sure thing. Just let me know what needs to be done.', sent: false, date: '2024-06-12T10:24:00Z' },
        { type: 'text', content: 'Will do. Thanks for the help, John.', sent: true, date: '2024-06-12T10:24:30Z' },
        { type: 'text', content: "Absolutely, I'll let you know once I have the details!", sent: false, date: '2024-06-12T10:25:00Z' },
      ]
    },
    {
      id: 2,
      name: 'Emily Clark',
      user: {
        id: 2,
        username: 'Emily Clark',
        icon: 'assets/pictures/story/4.jpg',
        createdAt: '2024-06-11T15:45:00Z'
      },
      avatar: 'assets/pictures/img_1.png',
      conversation: [
        { type: 'text', content: "Hi Emily! How's your day going?", sent: true, date: '2024-06-11T15:45:00Z' },
        { type: 'text', content: "Hey there! It's going well, thanks. Just finished a big project at work.", sent: false, date: '2024-06-11T15:46:00Z' },
        { type: 'text', content: "That's great news! Congrats on finishing the project. How are you celebrating?", sent: true, date: '2024-06-11T15:47:00Z' },
        { type: 'text', content: "Thanks! I'm thinking of treating myself to a nice dinner tonight.", sent: false, date: '2024-06-11T15:48:00Z' },
        { type: 'text', content: 'Sounds perfect. Any place in mind?', sent: true, date: '2024-06-11T15:49:00Z' },
        { type: 'text', content: "I've been wanting to try that new Italian place downtown. Have you been there?", sent: false, date: '2024-06-11T15:50:00Z' },
        { type: 'text', content: 'Oh yes! I went there last week. The pasta is amazing!', sent: true, date: '2024-06-11T15:51:00Z' },
        { type: 'text', content: "Great to hear! Now I'm even more excited. Here's the menu I found online:", sent: false, date: '2024-06-11T15:52:00Z' },
        { type: 'image', content: 'assets/italian-restaurant-menu.jpg', sent: false, date: '2024-06-11T15:52:30Z' },
        { type: 'text', content: 'Wow, everything looks delicious! I recommend the Fettuccine Alfredo.', sent: true, date: '2024-06-11T15:53:00Z' },
        { type: 'text', content: "Thanks for the recommendation! I'll definitely try that.", sent: false, date: '2024-06-11T15:54:00Z' },
        { type: 'text', content: 'Enjoy your dinner! Let me know how it goes.', sent: true, date: '2024-06-11T15:55:00Z' },
        { type: 'text', content: 'Will do! Thanks again.', sent: false, date: '2024-06-11T15:56:00Z' },
      ]
    },
    {
      id: 3,
      name: 'Michael Johnson',
      user: {
        id: 3,
        username: 'Michael Johnson',
        icon: 'assets/pictures/story/5.jpg',
        createdAt: '2024-06-10T09:30:00Z'
      },
      avatar: 'assets/pictures/img_2.png',
      conversation: [
        { type: 'text', content: "Hey Michael, how's the app development going?", sent: true, date: '2024-06-10T09:30:00Z' },
        { type: 'text', content: "Hi! It's going well, thanks for asking. We just finished the main UI.", sent: false, date: '2024-06-10T09:31:00Z' },
        { type: 'text', content: "That's great progress! Can I see a preview?", sent: true, date: '2024-06-10T09:32:00Z' },
        { type: 'text', content: "Sure thing! Here's a screenshot of the home screen:", sent: false, date: '2024-06-10T09:33:00Z' },
        { type: 'image', content: 'assets/app-home-screen.png', sent: false, date: '2024-06-10T09:33:30Z' },
        { type: 'text', content: 'Wow, it looks amazing! The design is so clean and intuitive.', sent: true, date: '2024-06-10T09:34:00Z' },
        { type: 'text', content: 'Thanks! We put a lot of effort into making it user-friendly.', sent: false, date: '2024-06-10T09:35:00Z' },
        { type: 'text', content: "What's next on the development roadmap?", sent: true, date: '2024-06-10T09:36:00Z' },
        { type: 'text', content: "We're starting on the backend integration next week. It's going to be challenging but exciting!", sent: false, date: '2024-06-10T09:37:00Z' },
        { type: 'text', content: 'Sounds like a big step. Good luck with that! Let me know if you need any help testing.', sent: true, date: '2024-06-10T09:38:00Z' },
        { type: 'text', content: "Thanks, I appreciate that! I'll definitely reach out when we're ready for user testing.", sent: false, date: '2024-06-10T09:39:00Z' },
        { type: 'text', content: 'Perfect. Keep up the great work!', sent: true, date: '2024-06-10T09:40:00Z' },
      ]
    },
    {
      id: 4,
      name: 'Sarah Thompson',
      user: {
        id: 4,
        username: 'Sarah Thompson',
        icon: 'assets/pictures/story/6.jpg',
        createdAt: '2024-06-09T14:00:00Z'
      },
      avatar: 'assets/pictures/img_3.png',
      conversation: [
        { type: 'text', content: 'Hi Sarah! How was your vacation?', sent: true, date: '2024-06-09T14:00:00Z' },
        { type: 'text', content: 'Hey! It was absolutely amazing. I had such a great time!', sent: false, date: '2024-06-09T14:01:00Z' },
        { type: 'text', content: "That's wonderful to hear! Where did you go again?", sent: true, date: '2024-06-09T14:02:00Z' },
        { type: 'text', content: 'I went to Bali. The beaches were breathtaking!', sent: false, date: '2024-06-09T14:03:00Z' },
        { type: 'text', content: "Oh wow, I've always wanted to go there. Do you have any pictures to share?", sent: true, date: '2024-06-09T14:04:00Z' },
        { type: 'text', content: "Of course! Here's one of my favorite shots from the trip:", sent: false, date: '2024-06-09T14:05:00Z' },
        { type: 'image', content: 'assets/bali-beach-sunset.jpg', sent: false, date: '2024-06-09T14:05:30Z' },
        { type: 'text', content: "That's absolutely stunning! The colors in that sunset are incredible.", sent: true, date: '2024-06-09T14:06:00Z' },
        { type: 'text', content: 'I know, right? It was even more beautiful in person.', sent: false, date: '2024-06-09T14:07:00Z' },
        { type: 'text', content: 'What was your favorite part of the trip?', sent: true, date: '2024-06-09T14:08:00Z' },
        { type: 'text', content: 'Probably exploring the local markets and trying all the delicious street food!', sent: false, date: '2024-06-09T14:09:00Z' },
        { type: 'text', content: "That sounds amazing. You'll have to tell me all about it over coffee sometime!", sent: true, date: '2024-06-09T14:10:00Z' },
        { type: 'text', content: 'Definitely! How about next week?', sent: false, date: '2024-06-09T14:11:00Z' },
        { type: 'text', content: 'Sounds perfect. Looking forward to it!', sent: true, date: '2024-06-09T14:12:00Z' },
      ]
    }
  ];

  getInstagramMessages(): Observable<Message[]> {
    return of(this.instagramMessages);
  }

  getDiscordMessages(): Observable<Message[]> {
    return of(this.discordMessages);
  }

  getMessages(): Observable<Message[]> {
    return of(this.messages);
  }

  getLastMessage(message: Message): string {
    const lastMsg = message.conversation[message.conversation.length - 1];
    if (lastMsg.sent) {
      return `Toi : ${lastMsg.type === 'text' ? lastMsg.content : '[Image]'}`;
    } else {
      return `${message.user.username} : ${lastMsg.type === 'text' ? lastMsg.content : '[Image]'}`;
    }
  }

  sendMessage(messageId: number, content: string, type: 'text' | 'image', date: string, platform: 'instagram' | 'discord' | 'generic' = 'generic'): void {
    let targetMessages: Message[];
    switch (platform) {
      case 'instagram':
        targetMessages = this.instagramMessages;
        break;
      case 'discord':
        targetMessages = this.discordMessages;
        break;
      default:
        targetMessages = this.messages;
    }

    const message = targetMessages.find(m => m.id === messageId);
    if (message) {
      const newMessage: MessageContent = { type, content, sent: true, date };
      message.conversation.push(newMessage);
    }
  }

  getMessagesByPlatform(platform: 'instagram' | 'discord' | 'generic'): Observable<Message[]> {
    switch (platform) {
      case 'instagram':
        return this.getInstagramMessages();
      case 'discord':
        return this.getDiscordMessages();
      default:
        return this.getMessages();
    }
  }
}