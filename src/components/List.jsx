import { useEffect, useState } from 'react';
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


export default function List() {
    const [data, setData] = useState([]);

    useEffect(() => {

        async function fetcher() {
            const rawData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
            const {drinks} = await rawData.json();
            setData(drinks);
        }

        fetcher()
            .then(() => console.log("Yay"))
            .catch(() => console.log("Nay"));

    }, [data.length]);

    return (
        <>
            {
                data.map((drink) => (
                    <StyledDiv key={drink.idDrink}>
                        <StyledHeader>{drink.strDrink}</StyledHeader>
                        <StyledImage src={drink.strDrinkThumb} alt={drink.strImageAttribution}/>
                        <StyledInfo>Glass:</StyledInfo>
                        <StyledP>{drink.strGlass}</StyledP>
                        <StyledInfo>Ingredients:</StyledInfo>
                        <StyledOL>
                        {drink.strIngredient1 && <li>{drink.strMeasure1} {drink.strIngredient1}</li>}
                            {drink.strIngredient2 && <li>{drink.strMeasure2} {drink.strIngredient2}</li>}
                            {drink.strIngredient3 && <li>{drink.strMeasure3} {drink.strIngredient3}</li>}
                            {drink.strIngredient4 && <li>{drink.strMeasure4} {drink.strIngredient4}</li>}
                            {drink.strIngredient5 && <li>{drink.strMeasure5} {drink.strIngredient5}</li>}
                            {drink.strIngredient6 && <li>{drink.strMeasure6} {drink.strIngredient6}</li>}
                            {drink.strIngredient7 && <li>{drink.strMeasure7} {drink.strIngredient7}</li>}
                        </StyledOL>
                        <StyledInfo>Instructions:</StyledInfo>
                        <StyledP>{drink.strInstructions}</StyledP>
                    </StyledDiv>))
            }
        </>
    );
}