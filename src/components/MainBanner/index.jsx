import React from 'react';
import art from '../../assets/brayanArt.png';
import dec1 from '../../assets/decoration1.png';
import background from '../../assets/homeBackground.png';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import styles from './mystyle.module.css';

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 120px;
  background-color: #121112;
  box-shadow: 0px 39px 0px #b046c2;
`;

const Titles = styled.div`
  display: block;
  margin-right: 80px;
`;

const Aga1 = styled.div`
  display: block;
`;

const Art = styled.img`
  width: 600px;
`;

const Dec1 = styled.img`
  width: 250px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

function Mainbanner() {
  return (
    <Banner>
      <Titles>
        <Aga1>
          <p className={styles.myNameIs}>Hi, my name is</p>
          <p className={styles.brayan}>Brayan.</p>
        </Aga1>
        <h2 className={styles.descriptionText}>
          I design and code beautifully simple <br /> things, and I love what I
          do.
        </h2>
      </Titles>
      <Art src={art} />
      <Dec1 src={dec1} />
    </Banner>
  );
}

export default Mainbanner;
