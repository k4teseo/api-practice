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
                  instructions={drink.strInstructions}
                  />
                ))
            }
        </>
    );
}