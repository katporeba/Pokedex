import React, {useState, useEffect} from "react";
import Cards from "./components/Cards";

const App = () => {
    const  [hasError, setErrors] =  useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [nextPokemons, setNextPokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

    const getData = async () => {
        try {
            const response = await fetch(nextPokemons);
            const data = await response.json();
            setNextPokemons(data.next);

            for (const pokemon of data.results) {
                const response = await fetch(pokemon.url);
                const dataOfPokemon = await response.json();
                setPokemons(pokemons => [...pokemons, dataOfPokemon]);
            }
        } catch (error) {
            setErrors(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

  return (
      <div className={"container"}>
          <h1 className={"header"}>Pokedex</h1>
          {!hasError && <Cards pokemons={pokemons}/>}
          <button onClick={() => getData()}>Show more pokemons</button>
      </div>
  )
}
export default App;
