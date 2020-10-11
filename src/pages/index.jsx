import React from 'react';
import Link from 'next/link';

import TournamentCards from '../components/TournamentCards';
import { Title, VideoContainer, Table, Countdown, Button, Card, LogoSVG } from '../components/UI';

/*
const listPartners = partnersList.map((partner) => (
  <div className="partner" key={partner.link}>
    <a href={partner.link} target="_blank" rel="noopener noreferrer" aria-label={`Partenaire ${partner.name}`}>
      <Card imgSrc={partner.img} classNameImg="partner-img" />
    </a>
  </div>
));
*/

const Home = () => (
  <div id="home">
    <div className="home-header">
      <div id="logo">
        <LogoSVG />
      </div>
      <div className="home-title">
        <p className="main">UTT Arena</p>
        <p>27, 28 et 29 novembre 2020</p>
      </div>
    </div>

    <div className="home-container page-padding">
      <div className="home-countdown">
        <Countdown date={new Date('November 27 2020 17:00:00 UTC+1')} />
      </div>

      <div className="home-info">
        <Title align="center">Informations</Title>
        <Title level={4} align="center" className="uppercase">
          Un format repensé, toujours la même ambiance !
        </Title>

        <p>
          L'UTT Arena revient pour sa 18<sup>ème</sup> édition les{' '}
          <span className="accent">27, 28 et 29 novembre 2020</span>. Cette édition aura lieu pour la première fois{' '}
          <span className="accent">intégralement en ligne</span>. Au programme,{' '}
          <span className="accent">6 tournois spotlights</span> sur des incontournables de l'esport, du skill, des
          personnalités et des rencontres, de nombreuses animations, avec bien sûr des{' '}
          <span className="accent">lots</span> à gagner, qui rendront cette édition plus intense et vibrante que jamais.
          Comme toujours des invités de qualité seront présents pour streamer et commenter tes meilleures games ! Alors
          prépare tout ton stuff et <span className="accent">impose-toi dans l'arène !</span>
        </p>

        <VideoContainer
          src="https://www.youtube.com/embed/bjBwMWQX-DY"
          title="Trailer UTT Arena 2020"
          className="video-container"
        />

        <Table
          columns={[
            { title: '', key: 'title' },
            { title: '', key: 'description' },
          ]}
          dataSource={[
            {
              title: <strong>Format</strong>,
              description: "A distance : chez toi, avec ton matos, prépare ton meilleur spot et c'est parti !",
            },
            { title: <strong>Ouverture</strong>, description: '27 novembre 2020 - 17h' },
            { title: <strong>Fermeture</strong>, description: '29 novembre 2020 - 18h' },
            { title: <strong>Début des tournois</strong>, description: 'Samedi 28 novembre à 10h précises' },
            { title: <strong>Places</strong>, description: '450 joueurs' },
            { title: <strong>Tarif</strong>, description: 'Gratuit !' },
            { title: <strong>Âge minimum</strong>, description: '16 ans' },
            {
              title: <strong>Tournois avec lots à gagner</strong>,
              description: 'LoL, CS:GO, SSBU, Rocket League, TFT, Valorant',
            },
          ]}
          className="info-table"
        />

        <Link href="/information">
          <a>
            <Button primary className="info-button" rightIcon="fas fa-chevron-right">
              Toutes les informations
            </Button>
          </a>
        </Link>
      </div>

      <div className="home-tournaments">
        <TournamentCards />
      </div>

      {/*
      <div className="home-partners">
        <Title align="center">
          Partenaires
        </Title>
        <div className="list-partners">{listPartners}</div>

        <Link href="/partners">
          <Button primary className="partners-button" rightIcon="fas fa-chevron-right">
            Tous les partenaires
          </Button>
        </Link>
      </div>
      */}
    </div>
  </div>
);

export default Home;
