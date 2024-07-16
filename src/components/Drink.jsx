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


const StyledOL = styled.ol`
  text-align: left;
  margin-top: 0;
  padding-left: 0;
`;


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
            <StyledInfo>Glass:</StyledInfo>
            <StyledP>{drink.glass}</StyledP>
            <StyledInfo>Ingredients:</StyledInfo>
            <StyledOL>
              {drink.ingredient1 && <li>{drink.measure1} {drink.ingredient1}</li>}
              {drink.ingredient2 && <li>{drink.measure2} {drink.ingredient2}</li>}
              {drink.ingredient3 && <li>{drink.measure3} {drink.ingredient3}</li>}
              {drink.ingredient4 && <li>{drink.measure4} {drink.ingredient4}</li>}
              {drink.ingredient5 && <li>{drink.measure5} {drink.ingredient5}</li>}
              {drink.ingredient6 && <li>{drink.measure6} {drink.ingredient6}</li>}
              {drink.ingredient7 && <li>{drink.measure7} {drink.ingredient7}</li>}
            </StyledOL>
            <StyledInfo>Instructions:</StyledInfo>
            <StyledP>{drink.instructions}</StyledP>
        </StyledDiv>
    )
}

export default Drink;