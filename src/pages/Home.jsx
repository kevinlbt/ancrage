import Header from '../components/header'
import Objectifs from '../components/Objectifs'
import Articles from '../components/articles'
import VideoBanner from '../components/videoBanner';
import React from 'react';
import styled from 'styled-components'
import Lighthouse from "../assets/images/lighthouse.jpg"

const LighthouseBack = styled.div`
  height: 35vw;
  background-image: url(${Lighthouse});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @media (max-width: 1024px) {
    height: 65vw;
  }
  @media (max-width: 640px) {
    height: 95vw;
  }
`

function Home() {

  return (<React.Fragment>
    <VideoBanner />
    <Header />
    <Objectifs />
    <LighthouseBack />
    <Articles />
  </React.Fragment>
  );
}

export default Home;
