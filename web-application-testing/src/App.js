import React from 'react';
import styled from "styled-components";
import './App.css';
import Display from './components/display';

const Title = styled.p`
  font-size: 4rem;
`

function App() {
  return (
    <div className="App">
      <Title>Baseball Stats</Title>
      <Display />
    </div>
  );
}

export default App;
