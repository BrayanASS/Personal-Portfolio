import React from 'react';
import foto from '../../assets/foto.png';
import styled from 'styled-components';
import styles from './mystyle.module.css';

const Sobre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 150px 150px;
  width: 80%;
`;

const Texts = styled.div`
  width: 40%;
  margin-left: 100px;
`;

const Title1 = styled.p`
  color: #867cc6;
  font-size: 17px;
  margin: 0;
`;

const Title2 = styled.p`
  color: #b046c2;
  font-size: 28px;
  margin: 0;
  font-weight: 600;
`;

const Par = styled.p`
  line-height: 27px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 17px;
  margin-top: 25px;
  margin-left: 30px;
`;

const Botao = styled.button`
  width: 130px;
  height: 45px;
  background: #b046c2;
  box-shadow: -6px 9px 0px rgba(176, 70, 194, 0.3);
  border-radius: 10px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 12px;
  transition: 0.6s;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  &:hover {
    box-shadow: none;
    font-size: 14px;
  }
`;

function Sobremim() {
  return (
    <Sobre>
      <img src={foto} style={{ width: '400px' }} alt='' />
      <Texts>
        <Title1>SOBRE MIM</Title1>
        <Title2>Quer saber quem sou?</Title2>
        <Par>
          Meu nome é Brayan Amaral, tenho atualmente 20 anos e estou cursando
          Engenharia de Computação na UFG. Meu trabalho está focado
          principalmente em desevolvimento web front-end e UI/UX design. <br />
          Estudo programação há aproximadamente2 anos, porém, não para por aí,
          estou buscando me desenvolver constantemente.
        </Par>
        <Botao>Saiba mais</Botao>
      </Texts>
    </Sobre>
  );
}

export default Sobremim;
