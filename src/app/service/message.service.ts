import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message, MessageContent } from '../models/message.model';
import { AnalyticsService } from './analytics.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private hints: { [platform: string]: { [key: string]: string } } = {
    'generic': {
      '1 bulletin': 'Peut être qu\'avec un autre document, on pourrait retrouver qui est la professeure principale ?',
      '2 bulletin': 'Avec l\'emploi du temps d\'Antoine, on devrait pouvoir retrouver sa professeure principale.',
      'solution bulletin': 'La professeure principale est Madame Potel, reste à trouver son numéro.',
      '1 cadenas': 'Antoine et Kenza sont-ils ensemble depuis le 15 novembre ou bien avant ?',
      '2 cadenas': 'En regardant la conversation avec Kenza, on devrait pouvoir trouver le code du cadenas',
      'solution cadenas': 'Antoine et Kenza se sont mis ensemble, 6 mois avant le 15 novembre donc le 16 mai : 165',
      '1 cadena': 'Antoine et Kenza sont-ils ensemble depuis le 15 novembre ou bien avant ?',
      '2 cadena': 'En regardant la conversation avec Kenza, on devrait pouvoir trouver le code du cadenas',
      'solution cadena': 'Antoine et Kenza se sont mis ensemble, 6 mois avant le 15 novembre donc le 16 mai : 165',
      '1 calendrier': 'Antoine et Kenza sont-ils ensemble depuis le 15 novembre ou bien avant ?',
      '2 calendrier': 'En regardant la conversation avec Kenza, on devrait pouvoir trouver le code du cadenas',
      'solution calendrier': 'Antoine et Kenza se sont mis ensemble, 6 mois avant le 15 novembre donc le 16 mai : 165',
      '1 instagram': 'Vous devriez poser la carte de transport sur le carnet de correspondance.',
      '2 instagram': 'Il faut prendre tous les éléments du code Instagram et les faire correspondre en suivant le chemin de la carte de transport.',
      'solution instagram': 'Le code pour accéder à Instagram est le suivant : 3O!HHT',
      '1 instagrame': 'Vous devriez poser la carte de transport sur le carnet de correspondance.',
      '2 instagrame': 'Il faut prendre tous les éléments du code Instagram et les faire correspondre en suivant le chemin de la carte de transport.',
      'solution instagrame': 'Le code pour accéder à Instagram est le suivant : 3O!HHT',
      '1 insta': 'Vous devriez poser la carte de transport sur le carnet de correspondance.',
      '2 insta': 'Il faut prendre tous les éléments du code Instagram et les faire correspondre en suivant le chemin de la carte de transport.',
      'solution insta': 'Le code pour accéder à Instagram est le suivant : 3O!HHT',
      '1 carnet': 'Vous devriez poser la carte de transport sur le carnet de correspondance.',
      '2 carnet': 'Il faut prendre tous les éléments du code Instagram et les faire correspondre en suivant le chemin de la carte de transport.',
      'solution carnet': 'Le code pour accéder à Instagram est le suivant : 3O!HHT',
      '1 correspondance': 'Vous devriez poser la carte de transport sur le carnet de correspondance.',
      '2 correspondance': 'Il faut prendre tous les éléments du code Instagram et les faire correspondre en suivant le chemin de la carte de transport.',
      'solution correspondance': 'Le code pour accéder à Instagram est le suivant : 3O!HHT',
      '1 ville': 'En lisant la conversation de Josh sur Instagram et de Lena sur Discord vous devriez pouvoir trouver où se trouve Antoine',
      '2 ville': 'D\'autres personnes peuvent être appelées, la professeure principale, le club de tennis, le commissariat, la banque…',
      'solution ville': 'Antoine se trouve au niveau du 22 : Poissonnerie Humbert. Vous pouvez appelez la professeure principale au 11 Fleuriste Potel.',
      '1 plan': 'En lisant la conversation de Josh sur Instagram et de Lena sur Discord vous devriez pouvoir trouver où se trouve Antoine',
      '2 plan': 'D\'autres personnes peuvent être appelées, la professeure principale, le club de tennis, le commissariat, la banque…',
      'solution plan': 'Antoine se trouve au niveau du 22 : Poissonnerie Humbert. Vous pouvez appelez la professeure principale au 11 Fleuriste Potel.',
      '1 carte': 'De quelle carte parlez-vous ? De la carte d\'identité ? De tennis ? De transport ? De la ville ? Dans votre demande n\'indiquez pas "carte".',
      '2 carte': 'De quelle carte parlez-vous ? De la carte d\'identité ? De tennis ? De transport ? De la ville ? Dans votre demande n\'indiquez pas "carte".',
      'solution carte': 'De quelle carte parlez-vous ? De la carte d\'identité ? De tennis ? De transport ? De la ville ? Dans votre demande n\'indiquez pas "carte".',
      '1 identité': 'Ce document est un simple élément de contexte, il n\'aide pas à terminer le jeu.',
      '2 identité': 'Ce document est un simple élément de contexte, il n\'aide pas à terminer le jeu.',
      'solution identité': 'Ce document est un simple élément de contexte, il n\'aide pas à terminer le jeu.',
      '1 identite': 'Ce document est un simple élément de contexte, il n\'aide pas à terminer le jeu.',
      '2 identite': 'Ce document est un simple élément de contexte, il n\'aide pas à terminer le jeu.',
      'solution identite': 'Ce document est un simple élément de contexte, il n\'aide pas à terminer le jeu.',
      '1 discord': 'La carte de tennis pourra vous aider avec l\'exercice 2 du contrôle de Maths',
      '2 discord': 'Il faut inverser chaque numéro par rapport aux couleurs des balles de tennis, présentes sur la carte de tennis. Par exemple 1 deviendra 8 et 8 deviendra 1.',
      'solution discord': 'Le code pour accéder à Discord est le suivant : 87190368',
      '1 discorde': 'La carte de tennis pourra vous aider avec l\'exercice 2 du contrôle de Maths',
      '2 discorde': 'Il faut inverser chaque numéro par rapport aux couleurs des balles de tennis, présentes sur la carte de tennis. Par exemple 1 deviendra 8 et 8 deviendra 1.',
      'solution discorde': 'Le code pour accéder à Discord est le suivant : 87190368',
      '1 tennis': 'La carte de tennis pourra vous aider avec l\'exercice 2 du contrôle de Maths',
      '2 tennis': 'Il faut inverser chaque numéro par rapport aux couleurs des balles de tennis, présentes sur la carte de tennis. Par exemple 1 deviendra 8 et 8 deviendra 1.',
      'solution tennis': 'Le code pour accéder à Discord est le suivant : 87190368',
      '1 transport': 'Vous devriez poser la carte de transport sur le carnet de correspondance.',
      '2 transport': 'Il faut prendre tous les éléments du code Instagram et les faire correspondre en suivant le chemin de la carte de transport.',
      'solution transport': 'Le code pour accéder à Instagram est le suivant : 3O!HHT',
      '1 contrôle': 'L\'exercice 2 pourra vous aider avec la carte de tennis',
      '2 contrôle': 'Il faut inverser chaque numéro par rapport aux couleurs des balles de tennis, présentes sur la carte de tennis. Par exemple 1 deviendra 8 et 8 deviendra 1.',
      'solution contrôle': 'Le code pour accéder à Discord est le suivant : 87190368',
      '1 controle': 'L\'exercice 2 pourra vous aider avec la carte de tennis',
      '2 controle': 'Il faut inverser chaque numéro par rapport aux couleurs des balles de tennis, présentes sur la carte de tennis. Par exemple 1 deviendra 8 et 8 deviendra 1.',
      'solution controle': 'Le code pour accéder à Discord est le suivant : 87190368',
      '1 math': 'L\'exercice 2 pourra vous aider avec la carte de tennis',
      '2 math': 'Il faut inverser chaque numéro par rapport aux couleurs des balles de tennis, présentes sur la carte de tennis. Par exemple 1 deviendra 8 et 8 deviendra 1.',
      'solution math': 'Le code pour accéder à Discord est le suivant : 87190368',
      '1 mathematique': 'L\'exercice 2 pourra vous aider avec la carte de tennis',
      '2 mathematique': 'Il faut inverser chaque numéro par rapport aux couleurs des balles de tennis, présentes sur la carte de tennis. Par exemple 1 deviendra 8 et 8 deviendra 1.',
      'solution mathematique': 'Le code pour accéder à Discord est le suivant : 87190368',
      '1 mathématique': 'L\'exercice 2 pourra vous aider avec la carte de tennis',
      '2 mathématique': 'Il faut inverser chaque numéro par rapport aux couleurs des balles de tennis, présentes sur la carte de tennis. Par exemple 1 deviendra 8 et 8 deviendra 1.',
      'solution mathématique': 'Le code pour accéder à Discord est le suivant : 87190368',
      '1 mathematiques': 'L\'exercice 2 pourra vous aider avec la carte de tennis',
      '2 mathematiques': 'Il faut inverser chaque numéro par rapport aux couleurs des balles de tennis, présentes sur la carte de tennis. Par exemple 1 deviendra 8 et 8 deviendra 1.',
      'solution mathematiques': 'Le code pour accéder à Discord est le suivant : 87190368',
      '1 mathématiques': 'L\'exercice 2 pourra vous aider avec la carte de tennis',
      '2 mathématiques': 'Il faut inverser chaque numéro par rapport aux couleurs des balles de tennis, présentes sur la carte de tennis. Par exemple 1 deviendra 8 et 8 deviendra 1.',
      'solution mathématiques': 'Le code pour accéder à Discord est le suivant : 87190368',
      '1 emploi': 'A l\'occasion de quel cours, Antoine a-t-il quitté les cours ?',
      '2 emploi': 'Ce document peut vous aider à trouver la professeure principale.',
      'solution emploi': 'La professeure principale est Madame Potel, reste à trouver son numéro.',
      '1 temps': 'A l\'occasion de quel cours, Antoine a-t-il quitté les cours ?',
      '2 temps': 'Ce document peut vous aider à trouver la professeure principale.',
      'solution temps': 'La professeure principale est Madame Potel, reste à trouver son numéro.',
      '1 note': 'A l\'occasion de quel cours, Antoine a-t-il quitté les cours ?',
      '2 note': 'Ce document peut vous aider à trouver la professeure principale.',
      'solution note': 'La professeure principale est Madame Potel, reste à trouver son numéro.',
      '1 interne': 'A l\'occasion de quel cours, Antoine a-t-il quitté les cours ?',
      '2 interne': 'Ce document peut vous aider à trouver la professeure principale.',
      'solution interne': 'La professeure principale est Madame Potel, reste à trouver son numéro.',
      '1 brouillon': 'Les indices ne servent qu\'une fois, vous n\'en aurez plus besoin.',
      '2 brouillon': 'Les indices ne servent qu\'une fois, vous n\'en aurez plus besoin.',
      'solution brouillon': 'Les indices ne servent qu\'une fois, vous n\'en aurez plus besoin.',
      '1 galerie': 'Ces photos vous aident à mieux comprendre la vie d\'Antoine.',
      '2 galerie': 'Ces photos vous aident à mieux comprendre la vie d\'Antoine.',
      'solution galerie': 'Ces photos vous aident à mieux comprendre la vie d\'Antoine.',
      '1 photos': 'Ces photos vous aident à mieux comprendre la vie d\'Antoine.',
      '2 photos': 'Ces photos vous aident à mieux comprendre la vie d\'Antoine.',
      'solution photos': 'Ces photos vous aident à mieux comprendre la vie d\'Antoine.',
      '1 photo': 'Ces photos vous aident à mieux comprendre la vie d\'Antoine.',
      '2 photo': 'Ces photos vous aident à mieux comprendre la vie d\'Antoine.',
      'solution photo': 'Ces photos vous aident à mieux comprendre la vie d\'Antoine.',
      '1 aymeric': 'Aymeric est le frère d\'Antoine. La conversation avec lui vous aident à mieux comprendre le regard d\'Antoine sur le bizutage.',
      '2 aymeric': 'Aymeric est le frère d\'Antoine. La conversation avec lui vous aident à mieux comprendre le regard d\'Antoine sur le bizutage.',
      'solution aymeric': 'Aymeric est le frère d\'Antoine. La conversation avec lui vous aident à mieux comprendre le regard d\'Antoine sur le bizutage.',
      '1 aime_rick': 'Aymeric est le frère d\'Antoine. La conversation avec lui vous aident à mieux comprendre le regard d\'Antoine sur le bizutage.',
      '2 aime_rick': 'Aymeric est le frère d\'Antoine. La conversation avec lui vous aident à mieux comprendre le regard d\'Antoine sur le bizutage.',
      'solution aime_rick': 'Aymeric est le frère d\'Antoine. La conversation avec lui vous aident à mieux comprendre le regard d\'Antoine sur le bizutage.',
      '1 téléphone': 'Avec le téléphone, vous allez pouvoir appeler les différents numéros présents sur la carte de la ville',
      '2 téléphone': 'Certains numéros nécessite de débloquer l\'application Discord ou d\'avoir trouvé Antoine avant de pouvoir être appelés',
      'solution téléphone': 'D\'autres personnes peuvent être appelées, la professeure principale, le club de tennis, le commissariat, la banque…',
      '1 telephone': 'Avec le téléphone, vous allez pouvoir appeler les différents numéros présents sur la carte de la ville',
      '2 telephone': 'Certains numéros nécessite de débloquer l\'application Discord ou d\'avoir trouvé Antoine avant de pouvoir être appelés',
      'solution telephone': 'D\'autres personnes peuvent être appelées, la professeure principale, le club de tennis, le commissariat, la banque…',
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
      name: 'Kenzart_ichaut',
      user: {
        id: 2,
        username: 'Kenzart_ichaut',
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
        { type: 'text', content: 'Ton club c’est celui des Fougères et ta prof principale c’est Géraldine Potel, dis moi si je me trompe ?', sent: false, date: '2025-02-21T10:56:45Z' },
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
        username: '30120',
        icon: 'assets/avatars/profil_default.png',
        createdAt: '2024-06-12T10:20:30Z'
      },
      name: '30120',
      avatar: 'assets/avatars/profil_default.png',
      conversation: [
        { type: 'text', content: 'Le service client disQutons reste à votre service. En cas de besoin, envoyez-nous un message avec le document qui bloque', sent: true, date: '2024-06-12T10:20:30Z' },
        { type: 'text', content: 'Envoyez le chiffre "1" et le nom du document pour un premier coup de main. Par exemple 1 instagram.', sent: true, date: '2024-06-12T10:20:30Z' },
        { type: 'text', content: 'Envoyez le chiffre "2" et le nom du document pour une aide plus précise', sent: true, date: '2024-06-12T10:20:30Z' },
        { type: 'text', content: 'Envoyez "solution" et le nom du document pour une prise en charge complète par nos service', sent: true, date: '2024-06-12T10:20:30Z' },
      
      ]
    }
    {
      id: 2,
      user: {
        id: 2,
        username: 'Maman',
        icon: 'assets/avatars/profil_default.png',
        createdAt: '2024-12-20T10:20:30Z'
      },
      name: 'Maman',
      avatar: 'assets/avatars/profil_default.png',
      conversation: [
        { type: 'text', content: 'Est-ce que tu voudras venir au ciné avec moi la semaine prochaine ?', sent: true, date: '2024-12-20T10:20:30Z' },
        { type: 'text', content: 'Avec plaisir ouais, je rentre dans 10 min', sent: false, date: '2024-12-20T10:25:32Z' },
        { type: 'text', content: 'Sais-tu à quelle heure tu vas rentrer ?', sent: true, date: '2025-02-26T12:46:15Z' },
        { type: 'text', content: 'Antoine, où es-tu ??', sent: true, date: '2025-02-26T14:22:11Z' },
      ]
    }
    {
      id: 3,
      user: {
        id: 3,
        username: 'Livraison UPA',
        icon: 'assets/avatars/profil_default.png',
        createdAt: '2024-06-12T10:20:30Z'
      },
      name: 'Maman',
      avatar: 'assets/avatars/profil_default.png',
      conversation: [
        { type: 'text', content: 'Votre colis arrive ce matin entre 8h et 18h. La caverne des jeux vous remercie encore pour votre achat.', sent: true, date: '2024-12-24T10:20:30Z' },     
      ]
    }
  ];

  constructor(private analyticsService: AnalyticsService) {}

  getInstagramMessages(): Observable<Message[]> {
    this.analyticsService.logAction('view_messages', {
      platform: 'instagram',
      count: this.instagramMessages.length
    }).subscribe();
    
    return of(this.instagramMessages);
  }

  getDiscordMessages(): Observable<Message[]> {
    this.analyticsService.logAction('view_messages', {
      platform: 'discord',
      count: this.discordMessages.length
    }).subscribe();
    
    return of(this.discordMessages);
  }

  getMessages(): Observable<Message[]> {
    this.analyticsService.logAction('view_messages', {
      platform: 'generic',
      count: this.messages.length
    }).subscribe();
    
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
    this.analyticsService.logAction('send_message', {
      platform: platform,
      message_id: messageId,
      content_type: type,
      content_length: content.length,
      is_hint_request: this.isHintRequest(content)
    }).subscribe();
    
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
      if (hint) {
        this.analyticsService.logAction('hint_provided', {
          platform: platform,
          message_id: messageId,
          hint_request: content,
          hint_type: this.getHintType(content),
          hint_topic: this.getHintTopic(content)
        }).subscribe();
        
        const hintMessage: MessageContent = { type: 'text', content: hint, sent: false, date: new Date().toISOString() };
        message.conversation.push(hintMessage);
        return of(hint);
      }
    }
    return of(null);
  }

  private isHintRequest(input: string): boolean {
    return this.getHintKey(input) !== null;
  }
  
  private getHintType(input: string): string {
    const parts = input.toLowerCase().trim().split(' ');
    if (parts.includes('1')) return 'level_1';
    if (parts.includes('2')) return 'level_2';
    if (parts.includes('solution')) return 'solution';
    return 'unknown';
  }
  
  private getHintTopic(input: string): string {
    const hintKey = this.getHintKey(input);
    if (!hintKey) return 'unknown';
    
    const parts = hintKey.split(' ');
    // Return the topic part (the non-number, non-solution part)
    return parts.find(part => !['1', '2', 'solution'].includes(part)) || 'unknown';
  }

  private getHintKey(input: string): string | null {
    // Normalize input to lowercase and trim spaces
    input = input.toLowerCase().trim();
    
    // Try to match "number word" or "word number" or "solution word" pattern
    const parts = input.split(' ');
    
    if (parts.length !== 2) return null;
    
    let key: string | null = null;
    
    // Case 1: "1 bulletin" format
    if (['1', '2'].includes(parts[0]) && parts[1]) {
      key = `${parts[0]} ${parts[1]}`;
    }
    // Case 2: "bulletin 1" format
    else if (['1', '2'].includes(parts[1]) && parts[0]) {
      key = `${parts[1]} ${parts[0]}`;
    }
    // Case 3: "solution bulletin" or "bulletin solution" format
    else if (parts[0] === 'solution' || parts[1] === 'solution') {
      key = 'solution ' + (parts[0] === 'solution' ? parts[1] : parts[0]);
    }
    
    return key;
  }

  private checkForHint(message: string, platform: 'instagram' | 'discord' | 'generic'): string | null {
    // Split message into words and try each pair of consecutive words
    const words = message.toLowerCase().split(' ');
    
    for (let i = 0; i < words.length - 1; i++) {
      const twoWordPhrase = words[i] + ' ' + words[i + 1];
      const hintKey = this.getHintKey(twoWordPhrase);
      
      if (hintKey) {
        if (this.hints[platform]?.[hintKey]) {
          return this.hints[platform][hintKey];
        }
        if (this.hints['generic']?.[hintKey]) {
          return this.hints['generic'][hintKey];
        }
      }
    }
    return null;
  }

  getMessagesByPlatform(platform: 'instagram' | 'discord' | 'generic'): Observable<Message[]> {
    this.analyticsService.logAction('view_messages_by_platform', {
      platform: platform
    }).subscribe();
    
    switch (platform) {
      case 'instagram':
        return this.getInstagramMessages();
      case 'discord':
        return this.getDiscordMessages();
      default:
        return this.getMessages();
    }
  }
  
  viewConversation(messageId: number, platform: 'instagram' | 'discord' | 'generic') {
    let targetMessage: Message | undefined;
    
    switch (platform) {
      case 'instagram':
        targetMessage = this.instagramMessages.find(m => m.id === messageId);
        break;
      case 'discord':
        targetMessage = this.discordMessages.find(m => m.id === messageId);
        break;
      default:
        targetMessage = this.messages.find(m => m.id === messageId);
    }
    
    if (targetMessage) {
      this.analyticsService.logAction('view_conversation', {
        platform: platform,
        message_id: messageId,
        contact_name: targetMessage.name,
        message_count: targetMessage.conversation.length
      }).subscribe();
    }
  }
}
