
import styled from 'styled-components';
import './App.css'
import { useState } from 'react';
import Stratgame from './components/Stratgame';
import Playtime from './components/Playtime'
import Score from './components/Score'


function App() {
 const [isGameStarted, setIsGameStarted] = useState(true);

    const toggleGamePlay=()=>{
      setIsGameStarted((prev)=> !prev);
    };

  return (
    <>
    {isGameStarted ? <Playtime/> : <Stratgame toggle ={toggleGamePlay}
    /> 
    } 
    </>
  );
};

export default App
