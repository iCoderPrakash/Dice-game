
import styled from "styled-components"

const Rolldice = ({currentDice,rollDice}) => {
   
   

  return (
    <DiceCintainer>
        <div className="dice" onClick={rollDice}>
            <img src={`/images/Dice/dice_${currentDice}.png`} alt="dice_1" /> 
        </div>
        <p>Click on dice to roll</p>

    </DiceCintainer>
  )
}

export default Rolldice

const DiceCintainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 48px;

    p{
        font-size: 24px;
    }

    .dice{
        cursor: pointer;
    }
`;
