import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <Rulescontainer>
      <div className='con'>
      <h2 className='headinng'>How to play game</h2>
      <div className='text'>
        <p>select any number</p>
        <p>Click on dice image</p>
        <p>After click on dice if selected number is equal to dice number you will get same point as a dice("")</p>
        <p>if you get wrong guess then 2 point will be dedcuted</p>
      </div>
      </div>
    </Rulescontainer>
  )
}

export default Rules

const Rulescontainer=styled.div`
background-color: #f8f1f1;
padding: 20px;
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
border-radius: 40px;
h2{
    font-size: 24px;
    font-weight: bold;
}

.text{
    margin-top: 24px;
}

@media (max-width:1686px) {

 .con{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 }
}
`;
