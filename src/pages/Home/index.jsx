import React from 'react';
import logo from '../../assets/logoBrayan.png';
import Navbar from '../../components/NavBar/index';
import Mainbanner from '../../components/MainBanner/index';
import './styles.css';

function Home() {
  return (
    <>
      <Navbar />
      <Mainbanner />
    </>
  );
}

export default Home;
