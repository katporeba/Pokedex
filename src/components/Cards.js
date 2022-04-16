import React from 'react';
import Card from './Card';
import classes from './Cards.module.css';

const Cards = (props) => {
    return (
        <div className={classes.cards}>
            {props.pokemons.map(pokemon =>
                <Card
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.types[0].type.name}
                    image={pokemon.sprites.other.home.front_default}
                    weight={pokemon.weight}
                    height={pokemon.height}
                />
            )}
        </div>
    );
};

export default Cards;
