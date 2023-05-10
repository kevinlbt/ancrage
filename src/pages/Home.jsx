import Header from '../components/header'
import Banner from '../components/Banner'
import Objectifs from '../components/Objectifs'
import Articles from '../components/articles'
import React from 'react';
import styled from 'styled-components'

const LighthouseBack = styled.div`
  height: 35vw;
  background-image: url(../assets/images/lighthouse.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @media (max-width: 1024px) {
    height: 65vw;
  }
`

function Home() {

  return (<React.Fragment>
    <Header />
    <Banner />
    <Objectifs />
    <LighthouseBack />
    <Articles />
  </React.Fragment>
  );
}

export default Home;
