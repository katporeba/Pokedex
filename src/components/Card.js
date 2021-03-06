import React from 'react';
import classes from './Card.module.css';
import './Colors.css'
import {faArrowUpLong, faScaleBalanced, faHeart, faHandPointer} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
    const [clicked, setClicked] = React.useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }

    function listAllTypes(types) {
        return types.map(type => {
            return type.type.name;
        }).join(" ")
    }

    return (
        <div onClick={handleClick} className={[classes.card, props.type[0].type.name].join(' ')} id={props.id} >
            <div className={classes.header}>
                <div className={classes.text}>
                    <div className={classes.pokemonId}>#{props.id}</div>
                    <div className={classes.name}>{props.name}</div>
                </div>
                <img src={props.image} alt={props.name}/>
            </div>

            <div className={classes.bar}>
                <div className={classes.type}>
                    <FontAwesomeIcon icon={faHeart} className={[classes.icons, classes.firstIcon, 'firstIcon'].join(' ')}/>
                    {listAllTypes(props.type)}
                </div>
                {clicked ?
                    <>
                        <div className={classes.weight}>
                            <FontAwesomeIcon icon={faScaleBalanced} className={classes.icons}/>
                            {props.weight}
                        </div>
                        <div className={classes.height}>
                            <FontAwesomeIcon icon={faArrowUpLong} className={classes.icons}/>
                            {props.height}
                        </div>
                    </>
                    :
                    <>
                        <div className={classes.clickFor}>
                            <FontAwesomeIcon icon={faHandPointer} className={classes.icons}/>
                            Click for more info
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Card;
