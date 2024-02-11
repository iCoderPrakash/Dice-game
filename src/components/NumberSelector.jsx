import React, { useState } from 'react'
import styled from 'styled-components'


const NumberSelector = ({selectedNumber,setselectedNumber,error,seterror}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberselector=(value)=>{
        setselectedNumber(value)
        seterror("")
    }
    
    console.log(selectedNumber)
    return (
        <Selactornumber >
            <div className='cont'>
            <p className='par'>{error}</p>
            <div className='flex'>
                {arrNumber.map((value, i) => (
                    <Box isSelected={value === selectedNumber} key={i} onClick={()=>numberselector(value)}>{value}</Box>
                ))}
            </div>
            <p>Select number</p>
            </div>
        </Selactornumber>
    );
};

export default NumberSelector;

const Selactornumber = styled.div`

.cont{
    display: flex;
justify-content: center;
flex-direction: column;
align-items: end;
}
.par{
    color: red;
}

.flex{
    display: flex;
    gap: 24px;
}

p{
    font-size: 24px;
    font-weight: 700;
    float: right;
    margin-top: 10px;
}
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size:24px;
    font-weight: 700;
     background-color:${(prop) => (prop.isSelected ? "black" : "white")};
     color:${(prop) => (prop.isSelected ? "white" : "black")} ;
`;
