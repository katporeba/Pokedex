import React from 'react';

const Card = (props) => {
    return (
        <div>
            <h1>#{props.id}</h1>
            <h2>{props.name}</h2>
            <h2>{props.type}</h2>
            <img src={props.image} alt={props.name}/>
            <div className={"hidden"}>
                <h2>{props.weight}</h2>
                <h2>{props.height}</h2>
            </div>
            <h2>{props.clicked}</h2>
        </div>
    );
};

export default Card;
