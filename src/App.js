import React, {useState, useEffect} from "react";
import {faArrowsRotate, faCloudMoon} from "@fortawesome/free-solid-svg-icons";
import Cards from "./components/Cards";
import LogoDark from "./img/logo-dark.svg";
import LogoLight from "./img/logo-light.svg";
import Loader from "./img/loader.svg";
import Button from "./components/Button";
import Refresh from "./components/Refresh";
import Form from "./components/Form";
import "./App.css";
import useLocalStorage from 'use-local-storage'


const App = () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    const [hasError, setErrors] =  useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [nextPokemons, setNextPokemons] = useState(url);
    const [loading, setLoading] = useState(true);
    const [reset, setReset] = useState(false);

    const defaultLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultLight ? 'dark' : 'light');

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
            if (name === '' && type) {
                setPokemons([]);
                setLoading(true);
                const response = await fetch("https://pokeapi.co/api/v2/type/" + type);
                const data = await response.json();
                for (const pokemon of data.pokemon) {
                    const response = await fetch(pokemon.pokemon.url);
                    const dataOfPokemon = await response.json();
                    setPokemons(pokemons => [...pokemons, dataOfPokemon]);
                }
            }
            if(type || name) {
                setNextPokemons(url)
                setLoading(false);
                setErrors(false);
                setReset(true);
            }
        } catch (error) {
            setErrors(error);
        }
    }

    const switchTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

  return (
      <div className={"container"} data-theme={theme}>
          <img className={"main-logo"} src={theme === 'dark' ? LogoLight : LogoDark} alt={"logo"}/>
          {loading ?
              <div className={"loading"}><img src={Loader} alt={"loader"}/></div> :
              <>{!hasError ?
                  <>
                      <div className={"container-form"}>
                          <Refresh onClick={getData} icon={faArrowsRotate}/>
                          <Refresh onClick={switchTheme} icon={faCloudMoon}/>
                          <Form filterPokemons={filterPokemons}/>
                      </div>
                      <Cards pokemons={pokemons}/>
                      <Button onClick={getData} text={"Show more"}/>
                  </>
                  :
                  <div className={"error"}>404</div>}
              </>
          }
      </div>
  )
}
export default App;
