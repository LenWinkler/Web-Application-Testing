import React from 'react';
import Count from "./components/count"
import styled from "styled-components";
import './App.css';

const Title = styled.p`
  font-size: 4rem;
`

function App() {
  return (
    <div className="App">
      <Title>Baseball Stats</Title>
      <Count />
    </div>
  );
}

export default App;
