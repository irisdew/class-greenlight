import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import styled from 'styled-components';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

const Home = () => {
  return (
    <DIV>
      <H1>에듀라이트</H1>
      <h4>비대면 교육 실시간 소통 서비스</h4>
      <img src="./icon.svg" alt="icon" style={{ width: '5rem' }} />
      <ColorButton variant="contained" style={{ color: 'white' }}>
        수업 만들기 >
      </ColorButton>
    </DIV>
  );
};

export default Home;

const DIV = styled.div`
  @font-face {
    font-family: 'TmoneyRoundWindRegular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 80vh;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-family: 'TmoneyRoundWindRegular';
  font-weight: 400;
`;

const H1 = styled.h1`
  @font-face {
    font-family: 'TmoneyRoundWindExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'TmoneyRoundWindExtraBold', sans-serif;
  font-weight: 800;
`;
