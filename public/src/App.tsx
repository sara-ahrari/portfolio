import React from 'react';
import GlobalStyle from './styles/Global.styles';
import styles from 'styled-components';
import Content from './components/Content';
import Header from './components/Header'
import Footer from './components/Footer'

const Wrapper = styles.div`
text-align: center;
min-height: 100vh;
display: flex;
flex-direction: column;
font-size: 1.2em;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Content />
      <Footer />
    </Wrapper>
  );
}

export default App;
