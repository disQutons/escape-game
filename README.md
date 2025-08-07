# Escape Game

L'association disQutons a développé un Escape Game destiné aux collégiens et lycéens, en collaboration avec La Sauce Ludique, une association nantaise spécialisée dans la création de jeux. Ce jeu immersif est conçu pour être utilisé dans des collèges, lycées et autres structures pour jeunes.

L'Escape Game traite de sujets cruciaux tels que les cyberviolences et les injonctions de genre. Après chaque session de jeu, un échange est prévu avec les jeunes participants, animé par un membre du personnel éducatif ou un représentant de l'association disQutons.
Le jeu est compatible pour être considéré comme une séance EVARS, les trois champs étant bien respectés.
Pour en savoir plus et accéder à la séance pédagogique, [rendez-vous sur notre site internet](https://www.disqutons.fr/le-telephone-dantoine/).

## Licence
CC BY-NC-SA 4.0
Pour rendre ce sujet le plus accessible possible, nous avons choisi d’en assouplir la propriété intellectuelle.

Attribution : Vous pouvez librement cet outil, à la seule condition de nous citer dans vos communications. Vous n’avez pas besoin de notre aval, et ça ne signifie pas que nous sommes en accord ou responsable de l’utilisation que vous en faites.
Pas d’utilisation commerciale : Vous ne pouvez en aucun cas vendre l’outil, sous quelque forme que ce soit (produit ou service). Vous pouvez cependant le compléter, modifier, reproduire et le diffuser. Tout faire, sauf le vendre !
Partage dans les mêmes conditions : Vous pouvez partager la nouvelle version de votre outil, auprès de vos partenaires, sur votre site internet, vos réseaux… L’utilisation faite par les tiers via ces partages devront simplement respecter les mêmes conditions que vous (nous citer, et ne pas en faire d’utilisation commerciale).
Les images et musiques utilisées sont sous cette même licence. Les images sont de [Laure Gaillardin](https://lauregaillardin.fr/) et la musique de [Sébastien Ossona](https://www.sebastienossona.com/).

## Label
Cet outil a obtenu le Label Chaire UNESCO Santé sexuelle & Droits humains.

![Label Chaire UNESCO Santé sexuelle & Droits humains](https://www.disqutons.fr/wp-content/uploads/Label.png)

## Première version

Ce projet représente la version initiale de l'application, développée en mode statique avec le framework Angular. Cette version a pour objectif de simuler les fonctionnalités de l'application finale et de servir de base pour les tests et l'évaluation des interactions utilisateur. Elle permet de visualiser l'interface utilisateur et de simuler les flux de navigation, sans intégration avec une base de données ou des services backend. L'application est accessible en ligne à l'adresse suivante : [https://disqutons.github.io/escape-game/#/.](https://disqutons.github.io/escape-game/#/)

## Lancer le projet avec Docker

### Prérequis

Assurez-vous d'avoir les outils suivants installés sur votre machine :
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Étapes pour démarrer le projet

1. **Configurer Docker et lancer le projet**
   
   Le projet est déjà configuré avec Docker. Il suffit de lancer la commande suivante pour démarrer l'application :

   ```bash
   docker-compose up --build
   ```

2. **Accéder à l'application**

   Une fois les conteneurs lancés, vous pouvez accéder à l'application Angular en ouvrant votre navigateur à l'adresse suivante :

   ```
   http://localhost:4200
   ```

   L'application se chargera avec Hot Module Replacement (HMR), ce qui signifie que toute modification du code sera automatiquement reflétée sans rechargement complet de la page.

### Arrêter le projet

Pour arrêter les conteneurs, utilisez la commande suivante :

```bash
docker-compose down
```

Cela arrêtera et supprimera les conteneurs associés à l'application.
