import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import Score from "./Score";
import Rolldice from "./Rolldice";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rules from "./Rules";
const Playtime=()=>{
  const [score, setscore] = useState(0)
  const [selectedNumber, setselectedNumber] = useState(0)
  const [currentDice, setcurrentDice] = useState(1)
  const [error, seterror] = useState()
  const[showrules,setshowrules]=useState()

  const GenerateRandomNumber= (min,max)=>{
    return Math.floor(Math.random()*(max - min)+ min)
};


const rollDice =()=>{
    const randomNumber=GenerateRandomNumber(1,7);

    setcurrentDice((prev)=> randomNumber)

      if(!selectedNumber) {

        seterror("You have not selected any number");

        return;
      };

      seterror("");

    if(selectedNumber === randomNumber){
      setscore(prev =>prev + randomNumber);
    } else{
      setscore(prev => prev - 2);
    }

    setselectedNumber(undefined)
}; 

const resetscore=()=>{
    setscore(0);
}



    return (
            <MainContainer>
              <div className="top_section">
              <Score  score={score}/>
              <NumberSelector 
              error={error}
              seterror={seterror}
              selectedNumber={selectedNumber}
              setselectedNumber={setselectedNumber}
              />
              </div>
              <Rolldice
              currentDice={currentDice}
              rollDice={rollDice}
              />
              <div className="btn">
                <Button onClick={resetscore}>Reset score</Button>
                <Button onClick={()=> setshowrules(prev=>!prev)}>{showrules? "Hide":"Show"} Rules</Button>
                </div>
               {showrules && <Rules/>}
            </MainContainer>
            
    );
};    

export default Playtime; 

const MainContainer=styled.main`
.top_section{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
}

.btn{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
`;

