/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const text = {
  index: {
    information: {
      catchPhrase: "VENEZ RETROUVER L'AMBIANCE D'UNE LAN PARTY AUTHENTIQUE AVEC VOTRE ÉQUIPE.",
      description: <>L&apos;UTT Arena revient pour sa 17<sup>ème</sup> édition les <span>6, 7 et 8 décembre 2019</span>. Cette édition aura lieu – comme l&apos;année dernière – dans le cadre du <span>Festival des Jeux</span> au Parc des Expositions de Troyes, le Cube. Au programme <span>5 tournois</span> sur des incontournables de l&apos;E-sport, du skill, des personnalités et des rencontres, de nombreuses animations, des <span>lots</span> et du <span>cashprize</span> à gagner, qui rendront cette édition plus intense et vibrante que jamais. Pas fan des jeux proposés ? Pas envie d’être dans un cadre compétitif ? L’UTT Arena propose un <span>tournoi libre</span>, composé des jeux que vous choisissez ! Alors récupère ta souris, ton casque et ton câble réseau, branche ton écran et <span>viens imposer la domination de ton équipe dans le Cube</span>.</>,
    },
    tournois: {
      catchPhrase: 'LES QUATRE JEUX À L’UTT ARENA 2019.',
    },
  },
  toornamentList: [
    {
      title: 'League of Legends (Pro)',
      cashprize: 'à venir',
      slot: 64,
      img: 'https://exp.gg/wp-content/uploads/2018/10/fnatic-pickem-768x432.jpg',
      link: '/tournaments/lolpro',
    },
    {
      title: 'League of Legends (Amateur)',
      cashprize: 'à venir',
      slot: 64,
      img: 'https://cdn.mgig.fr/2019/05/mg-2c26d6dc-25f3-4b20-966c-w1000h563-sc.jpg',
      link: '/tournaments/lolamateur',
    },
    {
      title: 'Super Smash Bros Ultimate',
      cashprize: 'à venir',
      slot: 64,
      img: 'https://img.bfmtv.com/c/1256/708/88a/c71b34349143f15d3bc2ed1e4745e.jpeg',
      link: '/tournaments/ssbu',
    },
    {
      title: 'Counter Strike : GO',
      cashprize: 'à venir',
      slot: 64,
      img: 'https://gamewave.fr/static/images/news/headers/cb6e9-meilleurjeu.jpg',
      link: '/tournaments/csgo',
    },
    {
      title: 'Fortnite Duo',
      cashprize: 'à venir',
      slot: 64,
      img: 'https://cdn2.unrealengine.com/Fortnite%2Fbattle-royale%2F09BP_Web_GetFornitePage_3UPMain-1920x1000-f8c6eabdf58b43b779e5762693908748572e6cb0.jpg',
      link: '/tournaments/fortnite',
    },
  ],
  info: {
    presentation: <>L&apos;<span>UTT Arena</span> c&apos;est le plus gros événement de l&apos;association <span>UTT Net Group</span> en matière d&apos;e-sport. L’association a été créée en 1998 et avait pour vocation de réunir les passionnés d’informatique et des nouvelles technologies de l’Université de Technologie de Troyes (UTT).<br /> L’UA réalise sa <span>16<sup>ème</sup> édition</span> cette année ! Au commencement, lors de la première édition, nous étions dans une salle d’examen de l’UTT avec une centaine de joueurs.<br /> Puis l&apos;événement a grandi, l’organisation a augmenté à 200 joueurs avec une scène dans la halle sportive de l’UTT.<br /> 2015 arriva, une opportunité unique nous a été offerte par la ville avec la création du Festival des Jeux. Nous avons donc déménagé au Cube et nous sommes depuis dans le format que vous connaissez !<br /> &Agrave; présent l’UTT Arena c’est <span>460 joueurs</span>, <span>5 tournois spotlights</span>, une scène de 70 m² et une centaine de bénévoles.<br /><br /> Et tout cela, c’est grâce à vous, les joueurs, qui nous faites confiance chaque année pour vous organiser un événement de folie, et à nos partenaires qui nous soutiennent chaque année dans l&apos;organisation de la LAN !</>,
    acces: [
      {
        title: 'Parking',
        text: 'Parking gratuit mis à disposition juste en face du Parc des Expositions',
      }, {
        title: 'Train',
        text: 'Gare de Troyes à 10 min à pied du festival',
      }, {
        title: 'Bus',
        text: 'Lignes 2, 6, 8: arrêt Terrasses ou Ligne 5: arrêt CCI',
      },
    ],
    billeterie: [
      {
        text: "Il sera possible d'acheter une place à partir du dimanche 13 octobre",
        list: [
          "Il faut d'abord s'inscrire",
          'Ensuite, il faut payer sa place',
          "Chaque joueur paye sa place, il n'y a pas de paiement groupé",
          'Le paiement se fait uniquement par carte bancaire',
        ],
      }, {
        text: 'Les tarifs sont les suivants :',
        list: [
          'Joueur : 15€',
          'Étudiant UTT, UTC, UTBM : 10€',
          'Accompagnateur : 6€ (limité à 40 places)',
        ],
      },
    ],
    joueurs: {
      desc:
  <>
    <strong>Rappel : l&apos;âge minimum pour participer au tournoi est de 15 ans.</strong><br /><br />
      Pour les mineurs, une autorisation parentale sera demandée lors de l&apos;événement. <a href="https://drive.google.com/file/d/1w15X9dXEaqkEQjqLNkXL_OZhDC7SIs2V/view">Vous pouvez la télécharger ici.</a>
  </>,
      apporte: ['Ton PC', 'Ton casque', 'Une multiprise', 'Un câble ethernet'],
      fourni: ['Une place assise évidemment', 'Un port ethernet', 'Une prise électrique'],
      vente: 'Nous vendons des multiprises et des câbles RJ45 de 5 et 7m.',
      streaming: "Pour les joueurs souhaitant streamer pendant la LAN, il faudra en faire la demande au moins 2 semaines avant l'UA, et nous vous autoriserons peut-être à streamer. Nous nous réservons le droit d'empêcher le stream si le réseau ne le permet pas.",
    },
    services: [
      {
        title: 'Nourriture',
        text: "On sait qu'un weekend de 48h non-stop ça creuse, nous te proposerons donc sur place : croques-monsieur, crêpes, pizzas, canettes, snack, tout pour te sustenter au mieux ! Et tout cela à un prix abordable.",
      }, {
        title: 'Couchage',
        text: "Nous mettons à disposition des joueurs des loges communes avec un accès à l'eau et aux douches ! Pensez à ramener vos duvets si vous souhaitez en profiter ! Nous metterons à disposition des tapis pour plus de confort.",
      },
    ],
  },
  lolpro: {
    title: 'League of Legends (Pro)',
    format:
  <>
    16 équipes réparties en 4 poules.
    <ul>
      <li>BO1 en poule</li>
      <li>Les 2 premiers de poule en Winner bracket et 2 derniers en Loser Bracket</li>
      <li>Match en BO1 jusqu&apos;en demi finale du Winner</li>
      <li>Match en BO3 à partir des demies finales du Winner</li>
    </ul>
  </>,
    cashprize: '2000€ pour les premiers puis lots',
  },
  lolamateur: {
    title: 'League of Legends (Amateur)',
    format:
  <>
    16 équipes réparties en 4 poules.
    <ul>
      <li>BO1 en poule</li>
      <li>Les 2 premiers de poule en Winner bracket et 2 derniers en Loser Bracket</li>
      <li>Match en BO1 jusqu&apos;en demi finale du Winner</li>
      <li>Match en BO3 à partir des demies finales du Winner</li>
    </ul>
  </>,
    cashprize: 'Lots pour les finalistes',
  },
  fortnite: {
    title: 'fortnite Duo',
    format:
  <>
    48 duos réparties en 4 poules.
    <ul>
      <li>BO1 en poule</li>
      <li>Les 2 premiers de poule en Winner bracket et 2 derniers en Loser Bracket</li>
      <li>Match en BO1 jusqu&apos;en demi finale du Winner</li>
      <li>Match en BO3 à partir des demies finales du Winner</li>
    </ul>
  </>,
    cashprize: '1000€ pour les premiers puis lots',
  },
  csgo: {
    title: 'Counter strike : GO',
    format:
  <>
    16 équipes réparties en 4 poules.
    <ul>
      <li>BO1 en poule</li>
      <li>Les 2 premiers de poule en Winner bracket et 2 derniers en Loser Bracket</li>
      <li>Match en BO1 jusquen demi finale du Winner</li>
      <li>Match en BO3 à partir des demies finales du Winner</li>
    </ul>
  </>,
    cashprize: '1000€ pour les premiers puis lots',
  },
  ssbu: {
    title: 'Super smash bros ultimate',
    format:
  <>
    16 équipes réparties en 4 poules.
    <ul>
      <li>BO1 en poule</li>
      <li>Les 2 premiers de poule en Winner bracket et 2 derniers en Loser Bracket</li>
      <li>Match en BO1 jusqu&apos;en demi finale du Winner</li>
      <li>Match en BO3 à partir des demies finales du Winner</li>
    </ul>
  </>,
    cashprize: '400€ pour le premier puis lots',
  },
};

export default text;