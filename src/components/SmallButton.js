import React from 'react';
import classes from "./SmallButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SmallButton = (props) => {
    return (
        <button className={classes.refresh} onClick={() => props.onClick()}>
            <FontAwesomeIcon icon={props.icon}/>
        </button>
    );
};

export default SmallButton;
