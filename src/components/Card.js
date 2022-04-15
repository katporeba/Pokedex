import React from 'react';

const Card = (props) => {
    return (
        <div onClick={props.onClick}>
            <h1>#{props.id}</h1>
            <h2>{props.name}</h2>
            <h2>{props.type}</h2>
            <img src={props.image} alt={props.name}/>
            {props.clicked &&
                <div className={"hidden"}>
                    <h2>{props.weight}</h2>
                    <h2>{props.height}</h2>
                </div>
            }
        </div>
    );
};

export default Card;
