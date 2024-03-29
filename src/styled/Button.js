import styled from "styled-components";
export const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px 18px;
    min-width: 200px;
    border-radius: 5px;
    border: none;
    float: right;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s ease-in;
    cursor: pointer;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s ease-in;
    }
`;



