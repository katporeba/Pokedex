import React from 'react';
import classes from "./Form.module.css";
import {faSearch, faBarsStaggered} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = () => {
    return (
        <div className={classes.form}>
            <div className={classes.name}>
                <FontAwesomeIcon icon={faSearch}/>
                <input type={"text"} placeholder={"Search by name"}/>
            </div>
            <div className={classes.type}>
                <FontAwesomeIcon icon={faBarsStaggered}/>
                <select id="type">
                    <option value="Grass">Grass</option>
                    <option value="fire">Fire</option>
                    <option value="bug">Bug</option>
                    <option value="fairy">Fairy</option>
                </select>
            </div>
        </div>
    );
};

export default Form;
