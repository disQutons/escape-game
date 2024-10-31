# Escape Game

L'association disQutons a développé un Escape Game destiné aux collégiens et lycéens, en collaboration avec La Sauce Ludique, une association nantaise spécialisée dans la création de jeux. Ce jeu immersif est conçu pour être utilisé dans des collèges, lycées et autres structures pour jeunes.

L'Escape Game traite de sujets cruciaux tels que les cyberviolences et les injonctions de genre. Après chaque session de jeu, un échange est prévu avec les jeunes participants, animé par un membre du personnel éducatif ou un représentant de l'association disQutons.

## Première version

Ce projet représente la version initiale de l'application, développée en mode statique avec le framework Angular. Cette version a pour objectif de simuler les fonctionnalités de l'application finale et de servir de base pour les tests et l'évaluation des interactions utilisateur. Elle permet de visualiser l'interface utilisateur et de simuler les flux de navigation, sans intégration avec une base de données ou des services backend. L'application est accessible en ligne à l'adresse suivante : [https://tamraouisebti.github.io/escape-game.](https://disqutons.fr/url/appantoine)

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
