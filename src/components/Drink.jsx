import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 2%;
  width: 40%;
  background-color: cornsilk;
  align-items: center;
  border: solid black 1px;
`;

const StyledHeader = styled.h1`
  font-family: "Didot", serif;
  font-size: calc(3px + 3vw);
  text-align: center;
`;


const StyledImage = styled.img`
  max-width: 90%;
  margin-bottom: 5%;
`;

const StyledInfo = styled.h2`
  margin: 1%;
  font-size: calc(1px + 1vw);
`;

/*
const StyledOL = styled.ol`
  text-align: left;
  margin-top: 0;
  padding-left: 0;
`;
*/

const StyledP = styled.p`
margin-top: 0;
width: 80%;
text-align: center;
`;

function Drink(drink) {
    return (
        <StyledDiv>
            <StyledHeader>{drink.name}</StyledHeader>
            <StyledImage src={drink.image} alt={drink.alt}/>
            <StyledInfo>Glass: {drink.glass}</StyledInfo>
            <StyledInfo>Instructions:</StyledInfo>
            <StyledP>{drink.instructions}</StyledP>
        </StyledDiv>
    )
}

export default Drink;