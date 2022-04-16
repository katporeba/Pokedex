import React, {useState, useEffect} from "react";
import Cards from "./components/Cards";
import MainLogo from "./img/logo.svg";
import Button from "./components/Button";
import "./App.css";

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
          <img src={MainLogo} className={"main-logo"} alt={"main-logo"}/>
          {!hasError && <Cards pokemons={pokemons}/>}
          <Button className={"button-load"} onClick={getData} text={"Show more"}/>
      </div>
  )
}
export default App;
