import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message, MessageContent } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private hints: { [platform: string]: { [key: string]: string } } = {
    'instagram': {
      'filter': 'Try using different filters to reveal hidden messages',
      'story': 'Check the stories for time-sensitive clues',
      'dm': 'Direct messages might contain private information',
      'hashtag': 'Popular hashtags could lead to community-shared hints',
      'bio': 'User bios might contain coded messages'
    },
    'discord': {
      'server': 'Different servers might have different pieces of the puzzle',
      'channel': 'Check all channels for scattered clues',
      'role': 'User roles might grant access to hidden information',
      'bot': 'Interact with bots for automated hints',
      'voice': 'Voice channels might have audio clues'
    },
    'generic': {
      'escape': 'Look for hidden passages',
      'key': 'Keys can open more than just doors',
      'puzzle': 'Pay attention to patterns',
      'clue': 'Sometimes the answer is right in front of you',
      'secret': 'Not everything is as it seems'
    }
  };

  private instagramMessages: Message[] = [
    {
      id: 1,
      user: {
        id: 1,
        username: 'tiretdubasjoshua',
        icon: `assets/pictures/story/josh_profil.jpg`,
        createdAt: '2024-06-12T10:20:30Z'
      },
      name: 'tiretdubasjoshua',
      avatar: 'assets/pictures/josh_profil.jpg',
      conversation: [
        { type: 'text', content: 'Bien joué pour le match, mec !', sent: false, date: '2024-02-20T16:05:00Z' },
        { type: 'text', content: 'Tu parles, j’ai galéré aujourd’hui', sent: true, date: '2024-02-20T16:06:15Z' },
        { type: 'text', content: 'Mais non t’as assuré ! Y’a les gars qui passent au nouvel appart ce soir tu veux venir ? ça te changera les idées…', sent: false, date: '2024-02-20T16:07:45Z' },
        { type: 'text', content: 'Ce soir je ne pourrai pas venir, vous avez déménagé où du coup ?', sent: true, date: '2024-02-20T16:09:00Z' },
        { type: 'text', content: 'Pas de pb ! Mes parents ont récupéré l’appartement au dessus de leur commerce, si jamais tu peux passer ou quoi, hésite pas.', sent: false, date: '2024-02-20T16:10:20Z' },
        { type: 'text', content: 'Quand tu sors du club, tu pars sur la gauche. Tu continues et tu prends la deuxième à gauche. Tu reprends une dernière fois à gauche et tu devrais reconnaître la boutique', sent: false, date: '2024-02-20T16:11:45Z' },
        { type: 'text', content: 'Les gars passent la soirée à l’appart alors qu’ils y a tes parents ? Ils sont ok ?', sent: true, date: '2024-02-20T16:13:30Z' },
        { type: 'text', content: 'Ils sont pas là, ils se sont pris deux semaines de vacances, je gère l’arrivée des colis en attendant. Mais je les ai prévenus, ils sont d’accord.', sent: false, date: '2024-02-20T16:15:10Z' },
        { type: 'text', content: 'OK ben pour ce soir moi c’est mort, mais je serai chaud de passer bientôt', sent: true, date: '2024-02-20T16:17:00Z' },
        { type: 'text', content: 'Tu passes quand tu veux mec !', sent: false, date: '2024-02-20T16:18:20Z' }
      ]
    },
    {
      id: 2,
      name: 'Kenart_ichaut',
      user: {
        id: 2,
        username: 'Kenart_ichaut',
        icon: `assets/pictures/story/kenza_profil.jpg`,
        createdAt: '2024-06-11T15:45:00Z'
      },
      avatar: 'assets/pictures/kenza_profil.jpg',
      conversation: [
        { type: 'text', content: 'Je trouve plus mon sweat, c’est toi qui l’as ?', sent: true, date: '2024-10-08T14:15:00Z' },
        { type: 'text', content: 'Regarde dans mon sac de sport dans mon casier', sent: false, date: '2024-10-08T14:16:30Z' },
        { type: 'text', content: 'C’est quoi le code du cadenas', sent: true, date: '2024-10-08T14:17:45Z' },
        { type: 'text', content: 'La date où on s’est mis ensemble', sent: false, date: '2024-10-08T14:18:30Z' },
        { type: 'text', content: 'Trop mignon <3', sent: true, date: '2024-10-08T14:19:45Z' },
        { type: 'text', content: 'C’est bon je l’ai trouvé merci bb', sent: true, date: '2024-10-08T14:20:30Z' },
        { type: 'text', content: 'Merci pour cette journée, c’était un super anniversaire <3', sent: true, date: '2024-11-17T18:30:00Z' },
        { type: 'text', content: 'Dire que ça fait déjà 6 mois', sent: false, date: '2024-11-17T18:32:15Z' },
        { type: 'text', content: 'Oui j’ai passé un bon moment moi aussi :)', sent: true, date: '2024-11-17T18:33:45Z' },
        { type: 'text', content: 'Rejoins moi devant le lycée, il faut qu’on parle', sent: false, date: '2025-01-08T13:10:00Z' },
        { type: 'text', content: 'Ok j’arrive', sent: true, date: '2025-01-08T13:12:30Z' },
        { type: 'text', content: 'Je suis désolé Antoine', sent: false, date: '2025-01-09T16:45:00Z' },
        { type: 'text', content: 'Antoine, pourquoi tu réponds pas à ton tél ?', sent: false, date: '2025-02-26T16:46:15Z' },
        { type: 'text', content: 'Ta mère m’a appelée, elle est en panique', sent: false, date: '2025-02-26T16:47:30Z' },
        { type: 'text', content: 'Rappelle-moi stp, tu m’inquiètes', sent: false, date: '2025-02-26T16:48:45Z' }
      ]
    },
    {
      id: 3,
      name: '1ere B maggle',
      user: {
        id: 3,
        username: '1ere B maggle',
        icon: `assets/pictures/story/giphy.webp`,
        createdAt: '2024-06-11T15:45:00Z'
      },
      avatar: 'assets/pictures/giphy.webp',
      conversation: [
        { type: 'text', content: 'Quelqu’un a fini le devoir de Maths ? J’y comprends rien ?', sent: false, date: '2025-01-01T14:00:00Z' },
        { type: 'text', content: 'Pareil je galère', sent: true, date: '2025-01-01T14:02:30Z' },
        { type: 'text', content: 'Ouais j’ai finis, je t’envoie un MP pour t’expliquer', sent: false, date: '2025-01-01T14:04:00Z' },

        { type: 'text', content: 'Mes parents ne sont pas chez moi ce week-end, est-ce que ça vous dire de passer ?', sent: false, date: '2025-01-06T16:30:00Z' },
        { type: 'text', content: 'Yes carrément !', sent: false, date: '2025-01-06T16:32:00Z' },
        { type: 'text', content: 'Chaaaauuud !', sent: true, date: '2025-01-06T16:34:15Z' },
        { type: 'text', content: 'Ah merde, je vais chez mes grands-parents ce week-end…', sent: false, date: '2025-01-06T16:36:00Z' },
        { type: 'text', content: 'Ché', sent: false, date: '2025-01-06T16:37:30Z' },
        { type: 'text', content: 'Je ramène une pizza !', sent: true, date: '2025-01-06T16:39:00Z' },
        { type: 'text', content: 'Cool, ramenez des trucs', sent: false, date: '2025-01-06T16:40:30Z' },

        { type: 'text', content: 'Ahah tu m’as bien fait marrer en histoire Antoine', sent: false, date: '2025-01-20T17:00:00Z' },
        { type: 'text', content: 'C’est clair, le prof a halluciné quand t’as sorti ta phrase en latin', sent: false, date: '2025-01-20T17:01:30Z' },
        { type: 'text', content: 'C’est un truc que mon frère m’avait appris', sent: true, date: '2025-01-20T17:03:00Z' },
        { type: 'text', content: 'Trop cool ton frère, ma sœur m’a dit qu’elle s’était bien marrée dans sa classe', sent: false, date: '2025-01-20T17:04:30Z' },

        { type: 'text', content: 'Il y a une nouvelle en 1ère D, pas mal pour une beurette !', sent: false, date: '2025-01-25T15:30:00Z' },
        { type: 'text', content: 'Toi par contre, t’es plutôt moche pour un raciste…', sent: false, date: '2025-01-25T15:31:30Z' },
        { type: 'text', content: 'Je suis pas raciste, qu’est-ce que j’ai dit ?', sent: false, date: '2025-01-25T15:33:00Z' },
        { type: 'text', content: 'Bah beurette c’est une insulte sale tocard', sent: false, date: '2025-01-25T15:34:30Z' },
        { type: 'text', content: 'Depuis quand ? Mes parents disent souvent ça…', sent: false, date: '2025-01-25T15:36:00Z' },
        { type: 'text', content: 'Merde, mes parents disent souvent ça…', sent: false, date: '2025-01-25T15:37:45Z' },
        { type: 'text', content: 'C’est la vérité qui blesse', sent: false, date: '2025-01-25T15:39:00Z' },
        { type: 'text', content: 'Désolé, j’avais pas fait gaffe. Elle est pas mal en tout cas !', sent: false, date: '2025-01-25T15:40:30Z' }

      ]
    },
    {
      id: 4,
      name: 'Lena23',
      user: {
        id: 4,
        username: 'Lena23',
        icon: `assets/pictures/story/fille_profil.jpg`,
        createdAt: '2024-06-11T15:45:00Z'
      },
      avatar: 'assets/pictures/fille_profil.jpg',
      conversation: [
        { type: 'text', content: 'Slt :)', sent: false, date: '2025-01-11T09:20:00Z' },
        { type: 'text', content: 'Slt, on se connaît ?', sent: true, date: '2025-01-11T09:21:30Z' },
        { type: 'text', content: 'Non, mais j’ai vu ton com sous la publication du jeu Tennisproplayer et je cherche quelqu’un pour jouer avec moi', sent: false, date: '2025-01-11T09:22:45Z' },
        { type: 'text', content: 'Moi non plus mes potes s’intéressent pas trop à ça, je me sens un peu seule lol', sent: false, date: '2025-01-11T09:23:30Z' },
        { type: 'text', content: 'Ah ok vas y pourquoi pas en vrai', sent: true, date: '2025-01-11T09:25:00Z' },
        { type: 'text', content: 'Par contre j’ai pas une bête de niveau mdr', sent: true, date: '2025-01-11T09:26:15Z' },
        { type: 'text', content: 'Ah mais tqt', sent: false, date: '2025-01-11T09:27:00Z' },
        { type: 'text', content: 'Je début encore, faut que je m’entraine justement', sent: false, date: '2025-01-11T09:28:30Z' },
        { type: 'text', content: 'Ah tant mieux alors on peut s’entraîner ensemble un peu si tu veux', sent: true, date: '2025-01-11T09:29:45Z' },
        { type: 'text', content: 'T’as discord ?', sent: false, date: '2025-01-11T09:31:00Z' },
        { type: 'text', content: 'Ce sera plus simple pour parler :)', sent: false, date: '2025-01-11T09:32:15Z' },
        { type: 'text', content: 'Oui mon pseudo c’est antoace', sent: true, date: '2025-01-11T09:33:30Z' },
        { type: 'text', content: 'Je t’ai envoyé l’invit !', sent: false, date: '2025-01-11T09:35:00Z' }

      ]
    },
  ];

  private discordMessages: Message[] = [
    {
      id: 1,
      user: {
        id: 1,
        username: 'Lena23',
        icon: `assets/pictures/story/fille_profil.jpg`,
        createdAt: '2024-06-12T10:20:30Z',
        status: 'online'
      },
      name: 'Lena23',
      avatar: `assets/pictures/story/fille_profil.jpg`,
      conversation: [
        { type: 'text', content: 'Coucou', sent: false, date: '2025-01-11T10:05:00Z' },
        { type: 'text', content: 'Hello, alors prête pour cette première partie à deux ?', sent: true, date: '2025-01-11T10:06:30Z' },
        { type: 'text', content: 'Carrément, je lance', sent: false, date: '2025-01-11T10:07:45Z' },
        { type: 'text', content: 'Tu t’es super bien débrouillée, bien joué', sent: true, date: '2025-01-11T11:45:12Z' },
        { type: 'text', content: 'Merciii, c’est parce que tu m’as donné des conseils ;) ça te dirait de remettre ça demain', sent: false, date: '2025-01-11T11:47:05Z' },
        { type: 'text', content: 'Ouais carrément, c’était cool', sent: true, date: '2025-01-11T11:49:40Z' },
        { type: 'text', content: 'Helloo, alors toujours partant ?', sent: false, date: '2025-01-12T09:15:00Z' },
        { type: 'text', content: 'De ouf, je lance', sent: true, date: '2025-01-12T09:16:45Z' },
        { type: 'text', content: 'C’était trop bien, on s’est bien améliorés !', sent: false, date: '2025-01-12T11:20:15Z' },
        { type: 'text', content: 'Ouais t’as raison, si on continue comme ça on va vraiment monter dans le classement.', sent: true, date: '2025-01-12T11:22:40Z' },
        { type: 'text', content: 'Ça fait du bien de jouer en double, j’ai un pote qui joue un peu mais en ce moment il a pas trop le temps', sent: false, date: '2025-01-12T11:24:55Z' },
        { type: 'text', content: 'Oui ça me fait plaisir à moi aussi ça fait un moment que je veux progresser sur le jeu et je suis contente de parler avec toi c’est chouette', sent: false, date: '2025-01-12T11:26:30Z' },
        { type: 'text', content: 'Oui, à moi aussi ça me fait du bien, ça me change les idées', sent: true, date: '2025-01-12T11:29:00Z' },
        { type: 'text', content: 'Pourquoi, pas ça va pas trop en ce moment ?', sent: false, date: '2025-01-12T11:30:30Z' },
        { type: 'text', content: 'Bof, je me suis fait larguer lol', sent: true, date: '2025-01-12T11:32:00Z' },
        { type: 'text', content: 'Je sais que c’est pas la fin du monde, mais c’est dur quand même', sent: true, date: '2025-01-12T11:33:00Z' },
        { type: 'text', content: 'Je comprends, c’est pas évident, si t’as besoin de parler, je suis là, je te jugerai pas.', sent: false, date: '2025-01-12T11:35:30Z' },
        { type: 'text', content: 'Merci ça fait du bien à entendre', sent: true, date: '2025-01-12T11:37:15Z' },
        { type: 'text', content: 'Tqt ;) On se refait une partie samedi ?', sent: false, date: '2025-01-12T11:38:00Z' },
        { type: 'text', content: 'Avec plaisir :)', sent: true, date: '2025-01-12T11:39:00Z' },
        { type: 'text', content: 'Helloooo, prêt ?', sent: false, date: '2025-01-18T10:00:00Z' },
        { type: 'text', content: 'Yep', sent: true, date: '2025-01-18T10:01:30Z' },
        { type: 'text', content: 'Rah on était à ça de les avoir', sent: false, date: '2025-01-18T11:50:10Z' },
        { type: 'text', content: 'Ouais c’est frustrant… on les aura la prochaine fois', sent: true, date: '2025-01-18T11:52:45Z' },
        { type: 'text', content: 'Je me demandais, t’as snap ? Je voulais t’envoyer une photo de mon équipement pour le tennis, pour que tu me dises ce que t’en penses', sent: false, date: '2025-01-18T12:15:30Z' },
        { type: 'text', content: 'Puis comme ça on pourra se parler là-dessus aussi :)', sent: false, date: '2025-01-18T12:16:20Z' },
        { type: 'text', content: 'Ça fait longtemps que j’y suis pas allé là-dessus mais vas y, c’est le même pseudo qu’ici', sent: true, date: '2025-01-18T12:18:45Z' },
        { type: 'text', content: 'Je repensais à la photo que tu m’as envoyé hier sur snap, elle est vraiment pas mal !', sent: false, date: '2025-02-21T10:30:00Z' },
        { type: 'text', content: 'Ahah merci je fais pas trop ce genre de choses normalement', sent: true, date: '2025-02-21T10:32:00Z' },
        { type: 'text', content: 'Pourquoi t’as supprimé ton compte sur snap ?', sent: false, date: '2025-02-21T10:35:00Z' },
        { type: 'text', content: 'Je voulais pas risquer que quelqu’un tombe sur les photos', sent: true, date: '2025-02-21T10:37:00Z' },
        { type: 'text', content: 'C’est vrai que ce serait un problème.', sent: false, date: '2025-02-21T10:40:30Z' },
        { type: 'text', content: 'C’est mignon d’avoir supprimé ton compte snap, mais ça change pas grand-chose', sent: false, date: '2025-02-21T10:42:00Z' },
        { type: 'text', content: 'Je me demande ce qu’ils en penseraient dans ton lycée et au club de tennis', sent: false, date: '2025-02-21T10:44:00Z' },
        { type: 'text', content: 'Quoi ?', sent: true, date: '2025-02-21T10:45:30Z' },
        { type: 'text', content: 'Ça veut dire quoi ça ?', sent: true, date: '2025-02-21T10:46:00Z' },
        { type: 'text', content: 'Mdr à ton avis, ça veut dire que si j’ai envie, je peux la montrer à qui je veux', sent: false, date: '2025-02-21T10:48:30Z' },
        { type: 'text', content: 'Mais t’es malade, tu ferais jamais ça', sent: true, date: '2025-02-21T10:50:00Z' },
        { type: 'text', content: 'Tu sais même pas à quel club je vais et qui sont mes profs', sent: true, date: '2025-02-21T10:52:30Z' },
        { type: 'text', content: 'Je vois que t’as pas bien compris la situation', sent: false, date: '2025-02-21T10:55:00Z' },
        { type: 'text', content: 'Ton club c’est celui des Fougères et ta prof principale c’est Géraldine Patel, dis moi si je me trompe ?', sent: false, date: '2025-02-21T10:56:45Z' },
        { type: 'text', content: 'Lena arrête stp', sent: true, date: '2025-02-21T10:58:00Z' },
        { type: 'text', content: 'Tiens, je t’envoie mon IBAN, tu vas en avoir besoin : FR76 234 3900 0702 3244 8416 3511', sent: false, date: '2025-02-21T11:00:30Z' },
        { type: 'text', content: 'Si tu me fais un virement de 50 euros je garde ça pour moi', sent: false, date: '2025-02-21T11:02:15Z' },
        { type: 'text', content: 'C bon c’est fait arrête supprime la photo', sent: true, date: '2025-02-21T11:05:00Z' },
        { type: 'text', content: 'Stp Lena je t’en prie', sent: true, date: '2025-02-21T11:06:15Z' },
        { type: 'text', content: 'On verra', sent: false, date: '2025-02-21T11:07:30Z' },
        { type: 'text', content: 'Si tu m’envoies 100 balles avant mercredi prochain, j’y penserai', sent: false, date: '2025-02-21T11:09:00Z' },
        { type: 'text', content: 'Mais tu te fous de ma gueule avec quel argent tu veux que je te paye', sent: true, date: '2025-02-21T11:11:45Z' },
        { type: 'text', content: 'C’est pas mon problème. Avant mercredi ou j’envoie la photo à ta prof', sent: false, date: '2025-02-21T11:14:00Z' },

      ]
    },
    {
      id: 2,
      user: {
        id: 2,
        username: 'Aime_rick',
        icon: `assets/pictures/story/aymeric_profil.jpg`,
        createdAt: '2024-06-11T15:45:00Z',
        status: 'offline'
      },
      name: 'Aime_rick',
      avatar: `assets/pictures/story/aymeric_profil.jpg`,
      conversation: [
        { type: 'text', content: 'Alors c’est comment ton école de commerce ?', sent: true, date: '2024-09-19T15:00:00Z' },
        { type: 'text', content: 'Trop cool, franchement il y a une ambiance de dingue.', sent: false, date: '2024-09-19T15:01:30Z' },
        { type: 'text', content: 'Je me suis déjà fait plein de potes et il y a un paquet de meufs !!', sent: false, date: '2024-09-19T15:03:00Z' },
        { type: 'text', content: 'Ahah trop cool !', sent: true, date: '2024-09-19T15:04:30Z' },
        { type: 'text', content: 'Ça va toi avec les parents ?', sent: false, date: '2024-09-19T15:06:00Z' },
        { type: 'text', content: 'Ouais tranquille, pas beaucoup de changement, tu les connais', sent: true, date: '2024-09-19T15:07:30Z' },
        { type: 'text', content: 'Je file faut que je fasse mon sac pour le week-end d’inté !', sent: false, date: '2024-09-19T15:09:00Z' },
        { type: 'text', content: 'Le week-end d’inté ?', sent: true, date: '2024-09-19T15:10:30Z' },
        { type: 'text', content: 'C’est le week-end d’intégration, c’est pour les nouveaux pour s’intégrer à toute la promo, ça va picoler sec !', sent: false, date: '2024-09-19T15:12:00Z' },

        { type: 'text', content: 'Alors ça va ? Pas trop mal au crâne ?', sent: true, date: '2024-09-23T16:00:00Z' },

        { type: 'text', content: 'Ahah laisse tomber, c’était génial !', sent: false, date: '2024-09-24T17:00:00Z' },
        { type: 'text', content: 'Qu’est-ce que vous avez fait ?', sent: true, date: '2024-09-24T17:01:30Z' },
        { type: 'text', content: 'C’était un genre de Koh Lanta mais avec des épreuves trop drôles. On a dû manger un foie de mouton le plus vite possible. On avait pas mal d’épreuves avec de l’alcool. Il y a des trucs que tu dois boire, il vaut mieux pas demander ce qu’il y a dedans !', sent: false, date: '2024-09-24T17:03:00Z' },
        { type: 'text', content: 'Euh… ouais ça a pas l’air super drôle vu comme ça…', sent: true, date: '2024-09-24T17:05:00Z' },
        { type: 'text', content: 'Non mais c’est parce que t’es pas dans l’ambiance c’est pour ça. L’année prochaine ce sera à notre tour d’inventer des épreuves à la con pour les nouveaux !', sent: false, date: '2024-09-24T17:06:30Z' },
        { type: 'text', content: 'Je comprends pas trop le délire, mais ok si tu t’es marré', sent: true, date: '2024-09-24T17:08:00Z' },
        { type: 'text', content: 'Ouais et puis vu comme ça picolait, c’était pas trop dur de choper !!', sent: false, date: '2024-09-24T17:09:30Z' },
        { type: 'text', content: 'Je pars en soirée, à plus', sent: false, date: '2024-09-24T17:11:00Z' },

        { type: 'text', content: 'Est-ce que tu rentres pendant les vacances ?', sent: true, date: '2024-10-10T14:30:00Z' },
        { type: 'text', content: 'Non désolé, il faut que je bosse un peu !', sent: false, date: '2024-10-10T14:32:00Z' },
        { type: 'text', content: 'Je rigole, c’est pas pour bosser mais on va en profiter avec des potes pour aller à la montagne', sent: false, date: '2024-10-10T14:33:30Z' },
        { type: 'text', content: 'Trop cool, profite bien. On se voit à Noël alors !', sent: true, date: '2024-10-10T14:35:00Z' },

        { type: 'text', content: 'Est-ce que t’as des idées de cadeaux pour les parents ?', sent: false, date: '2024-11-20T18:00:00Z' },
        { type: 'text', content: 'Ouais, on pourrait leur offrir un jeu genre Dixit ou un truc comme ça ? Sinon une place au théâtre, ils sortent pas beaucoup ensemble', sent: true, date: '2024-11-20T18:02:00Z' },
        { type: 'text', content: 'Dac je vais regarder, je te tiens au courant !', sent: false, date: '2024-11-20T18:03:30Z' },

        { type: 'text', content: 'C’était bien cool de te voir avec les parents ! T’avais l’air en forme ! Le tennis te réussi bien !', sent: false, date: '2025-01-03T16:00:00Z' },
        { type: 'text', content: 'Trop bien que tu sois venu !', sent: true, date: '2025-01-03T16:02:00Z' },
        { type: 'text', content: 'Ouais je m’entraîne pas mal', sent: true, date: '2025-01-03T16:03:30Z' },
        { type: 'text', content: 'Super cool ta meuf au passage. J’étais content de rencontrer Kenza', sent: false, date: '2025-01-03T16:05:00Z' },
        { type: 'text', content: ':)', sent: true, date: '2025-01-03T16:06:30Z' },
        { type: 'text', content: 'Ça doit être cool au pieu', sent: false, date: '2025-01-03T16:08:00Z' },
        { type: 'text', content: 'Arrête t’es chiant', sent: true, date: '2025-01-03T16:09:30Z' },
        { type: 'text', content: 'Oh ça va', sent: false, date: '2025-01-03T16:11:00Z' },

        { type: 'text', content: 'Tu viens toujours le week-end prochain ?', sent: true, date: '2025-01-27T12:00:00Z' },
        { type: 'text', content: 'Ouais mon train arrive à 22h vendredi', sent: false, date: '2025-01-27T12:01:30Z' },
        { type: 'text', content: 'Trop cool ! Mamie sera là pour info', sent: true, date: '2025-01-27T12:03:00Z' },
        { type: 'text', content: 'Oh ça va sentir la mort à la maison ahah', sent: false, date: '2025-01-27T12:04:30Z' },
        { type: 'text', content: 'T’es con, elle est super en vrai', sent: true, date: '2025-01-27T12:06:00Z' }
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

  sendMessage(messageId: number, content: string, type: 'text' | 'image', date: string, platform: 'instagram' | 'discord' | 'generic' = 'generic'): Observable<string | null> {
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
      // Check for hints
      const hint = this.checkForHint(content, platform);
      console.log(hint);
      if (hint) {
        const hintMessage: MessageContent = { type: 'text', content: hint, sent: false, date: new Date().toISOString() };
        message.conversation.push(hintMessage);
        return of(hint);
      }
    }
    return of(null);
  }

  private checkForHint(message: string, platform: 'instagram' | 'discord' | 'generic'): string | null {
    const words = message.toLowerCase().split(' ');
    for (const word of words) {
      if (this.hints[platform][word]) {
        return this.hints[platform][word];
      }
      if (this.hints['generic'][word]) {
        return this.hints['generic'][word];
      }
    }
    return null;
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