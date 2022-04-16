import React, {useState, useEffect} from "react";
import Cards from "./components/Cards";
import MainLogo from "./img/logo.svg";
import Button from "./components/Button";
import Refresh from "./components/Refresh";
import Form from "./components/Form";
import "./App.css";

const App = () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    const [hasError, setErrors] =  useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [nextPokemons, setNextPokemons] = useState(url);
    const [loading, setLoading] = useState(true);
    const [reset, setReset] = useState(false);

    const getData = async () => {
        try {
            if(reset){
                setPokemons([]);
                setReset(false);
            }
            const response = await fetch(nextPokemons);
            const data = await response.json();
            setNextPokemons(data.next);

            for (const pokemon of data.results) {
                const response = await fetch(pokemon.url);
                const dataOfPokemon = await response.json();
                setPokemons(pokemons => [...pokemons, dataOfPokemon]);
            }
            setLoading(false);
            setErrors(false);
        } catch (error) {
            setErrors(error);
        }
    }

    useEffect(() => {
        setNextPokemons(url);
        getData();
    }, [])

    const filterPokemons = async (name, type) => {
        try {
            if(name) {
                setLoading(true);
                const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
                const data = await response.json();
                setPokemons(() => [data]);
            }
            if (name === '' && type !== 'All') {
                console.log(type);
                setPokemons([]);
                const response = await fetch("https://pokeapi.co/api/v2/type/" + type);
                const data = await response.json();
                console.log(data.pokemon);
                for (const pokemon of data.pokemon) {
                    const response = await fetch(pokemon.pokemon.url);
                    const dataOfPokemon = await response.json();
                    setPokemons(pokemons => [...pokemons, dataOfPokemon]);
                }
            }
            if((name === '' && type !== 'All') || name) {
                setNextPokemons(url)
                setLoading(false);
                setErrors(false);
                setReset(true);
            }

        } catch (error) {
            setErrors(error);
        }
    }

  return (
      <div className={"container"}>
          <img src={MainLogo} className={"main-logo"} alt={"main-logo"}/>
          {loading ?
              <div className={"loading"}>Loading</div> :
              <>{!hasError ?
                  <>
                      <div className={"container-form"}>
                          <Refresh onClick={getData}/>
                          <Form filterPokemons={filterPokemons}/>
                      </div>
                      <Cards pokemons={pokemons}/>
                  </>
                  :
                  <div className={"error"}>404</div>}
              </>
          }
          <Button onClick={getData} text={"Show more"}/>
      </div>
  )
}
export default App;
