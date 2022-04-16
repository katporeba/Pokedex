import React from 'react';
import classes from "./Button.module.css";
import {faArrowDownLong} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => {
    return (
        <>
         <button className={classes.button} onClick={() => props.onClick()}>
             <p>{props.text}</p>
             <FontAwesomeIcon icon={faArrowDownLong} />
         </button>
        </>
    );
};

export default Button;
