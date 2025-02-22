# UA-front

[![Build Status](https://github.com/ungdev/UA-front/actions/workflows/ci.yml/badge.svg)](https://github.com/ungdev/UA-api/actions)
[![Read the Docs](https://readthedocs.org/projects/ua/badge/?version=latest&style=flat)](https://ua.readthedocs.io/)

Nouvelle version du site de l'UTT Arena ([https://arena.utt.fr](https://arena.utt.fr)).

**Avant toute chose**, prenez connaissance de [la documentation](https://ua.readthedocs.io).

## Pré-requis

- [Yarn](https://yarnpkg.com/fr/)

## Installation

### Clonage et installation des dépendences

```
git clone https://github.com/ungdev/UA-front.git
cd UA-front
yarn
```

### Modification de la configuration

Il faut créer un fichier .env en se basant sur .env.example, puis il suffira de le modifier en fonction de l'utilisation.

```
cp .env.example .env
```

## Scripts disponibles

- `yarn dev` : permet de lancer une version locale de développement
- `yarn build` : permet de build l'application
- `yarn start` : permet de servir le build
- `yarn build-docs` : permet de générer la documentation des composants situés dans le dossier /src/components/UI. La documentation se situera dans le dossier /docs.
- `yarn lint` : permet d'afficher les recommendations de formatage du code
- `yarn lint-fix` : permet de corriger le formatage du code
