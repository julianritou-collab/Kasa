# Kasa

Kasa est une application web de location d’hébergements, développée avec React, Vite et SCSS.

## Fonctionnalités

- **Accueil** : liste des logements sous forme de cartes, avec bannière d’accueil.
- **Page logement** : carrousel d’images, titre, localisation, tags, note, hôte,description et équipements sous forme d’accordéons.
- **Page À propos** : présentation des valeurs Kasa sous forme d’accordéons.
- **Page 404** : affichage d’une page personnalisée en cas d’URL inconnue.

## Installation

1. Clone le dépôt :

    ```bash
    git clone [https://github.com/julianritou-collab/Kasa.git](https://github.com/julianritou-collab/Kasa.git) cd Kasa

2. Installation des dépendances

    npm install

3. Lancer le serveur de développement

    npm run dev

4. Ouvrir [http://localhost:5173](http://localhost:5173) dans ton navigateur.

    ou o (open) après commande npm run dev

## Scripts utiles

- `npm run dev` : démarre le serveur de développement
- `npm run build` : build de production
- `npm run preview` : prévisualisation du build
- `npm run lint` : vérification du code avec ESLint

## Structure du projet

Kasa/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── api/
│   │   └── accommodationApi.js
│   ├── assets/
│   │   ├── about-banner.webp
│   │   ├── arrow-up.png
│   │   ├── gray-star.png
│   │   ├── home-banner.webp
│   │   ├── logo.png
│   │   └── pink-star.png
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Card.jsx
│   │   ├── Collapse.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Host.jsx
│   │   ├── Rating.jsx
│   │   ├── Slideshow.jsx
│   │   ├── Spinner.jsx
│   │   └── TagList.jsx
│   ├── data/
│   │   └── logements.json
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Accommodation.jsx
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── router/
│   │   └── Router.jsx
│   ├── styles/
│   │   ├── main.scss
│   │   ├── base/
│   │   │   ├── _base.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _reset.scss
│   │   │   └── _variables.scss
│   │   ├── components/
│   │   │   ├── _banner.scss
│   │   │   ├── _card.scss
│   │   │   ├── _collapse.scss
│   │   │   ├── _footer.scss
│   │   │   ├── _header.scss
│   │   │   ├── _host.scss
│   │   │   ├── _rating.scss
│   │   │   ├── _slideshow.scss
│   │   │   ├── _spinner.scss
│   │   │   └── _tag-list.scss
│   │   └── pages/
│   │       ├── _about.scss
│   │       ├── _accommodation.scss
│   │       ├── _home.scss
│   │       └── _not-found.scss
│   ├── App.jsx
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js

## Dépendances principales

- React : ^19.2.4
- React DOM : ^19.2.4
- React Router DOM : ^7.14.1
- Sass : ^1.99.0
- Vite : ^8.0.4
- ESLint : ^9.39.4

## Auteur

- Julian Ritou
- C'est en codant qu'on devient coderon!
- Projet5 réalisé dans le cadre de la formation OpenClassrooms
