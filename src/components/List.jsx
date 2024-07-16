import { useEffect, useState } from 'react';
import Drink from "./Drink.jsx";


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
                  <Drink
                  key={drink.idDrink}
                  name={drink.strDrink}
                  image={drink.strDrinkThumb}
                  alt={drink.strImageAttribution}
                  glass={drink.strGlass}
                  ingredient1={drink.strIngredient1}
                  ingredient2={drink.strIngredient2}
                  ingredient3={drink.strIngredient3}
                  ingredient4={drink.strIngredient4}
                  ingredient5={drink.strIngredient5}
                  ingredient6={drink.strIngredient6}
                  ingredient7={drink.strIngredient7}
                  measure1={drink.strMeasure1}
                  measure2={drink.strMeasure2}
                  measure3={drink.strMeasure3}
                  measure4={drink.strMeasure4}
                  measure5={drink.strMeasure5}
                  measure6={drink.strMeasure6}
                  measure7={drink.strMeasure7}
                  instructions={drink.strInstructions}
                  />
                ))
            }
        </>
    );
}