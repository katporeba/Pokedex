import React from 'react';
import classes from "./Form.module.css";
import {faSearch, faBarsStaggered, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = (props) => {
    const [name, setName] = React.useState("");
    const [type, setType] = React.useState("bug");

    const onSubmit = async (e) => {
        e.preventDefault();
        await props.filterPokemons(name, type);
    }

    // TODO: get types from fetch
    const types = [
        "bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"
    ];

    const createOptions = () => {
        return types.map(type => {
            return <option key={type} value={type}>{type.charAt(0).toUpperCase()+type.slice(1)}</option>
        })
    }

    return (
        <form className={classes.form} onSubmit={onSubmit}>
            <div className={classes.name}>
                <FontAwesomeIcon icon={faSearch}/>
                <input type={"text"}
                       placeholder={"Search by name"}
                       onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className={classes.type}>
                <FontAwesomeIcon icon={faBarsStaggered}/>
                <select id="type"  onChange={(e) => setType(e.target.value)}>
                    {createOptions()}
                </select>
            </div>
            <button type={"submit"} className={classes.button}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </form>
    );
};

export default Form;
