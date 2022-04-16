import React from 'react';
import classes from "./Refresh.module.css";
import {faArrowsRotate} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Refresh = (props) => {
    return (
        <button className={classes.refresh} onClick={() => props.onClick()}>
            <FontAwesomeIcon icon={faArrowsRotate}/>
        </button>
    );
};

export default Refresh;
