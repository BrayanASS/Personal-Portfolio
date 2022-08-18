import React from 'react';
import logo from '../../assets/logoBrayan.png';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 8rem 2rem 8rem;
`;

function Navbar() {
  return (
    <Nav>
      <img src={logo} style={{ cursor: 'pointer' }} />
      <Icon
        icon='gg:menu-hotdog'
        width='70'
        color='white'
        style={{ cursor: 'pointer' }}
      />
    </Nav>
  );
}

export default Navbar;
