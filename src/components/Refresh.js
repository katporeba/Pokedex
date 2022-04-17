import React from 'react';
import classes from "./Refresh.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Refresh = (props) => {
    return (
        <button className={classes.refresh} onClick={() => props.onClick()}>
            <FontAwesomeIcon icon={props.icon}/>
        </button>
    );
};

export default Refresh;
