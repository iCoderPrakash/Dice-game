import styled from "styled-components";
import { Button } from "../styled/Button";
const Stratgame = ({ toggle }) => {
    return (<>
        <Container  >
            <div className="container">
            <img className="img" src="./images/Dice.png" alt="" />
            <div className="content">
                <h1>Dice Game</h1>
                <Button className="btn" onClick={toggle}>Play Now</Button>
            </div>
            </div>
        </Container>
    </>
    );
};

export default Stratgame;

const Container = styled.div`

.container{
    max-width: 1180px;
display: flex;
align-items: center;
gap: 80px;
}
.content h1{
    font-size:96px;
    white-space: nowrap;
}

@media (max-width:1686px) {

    .container{
        width: 100vw;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
    }

    .content h1{
    font-size:6vw;
    white-space: nowrap;
}

.btn{
    min-width: 20vw;
    border-radius: 5px;
    border: none;
    float: right;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s ease-in;
    cursor: pointer;
}

.img{
    width: 64vw;
}
}
`;



