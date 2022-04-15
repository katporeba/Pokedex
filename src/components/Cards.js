import React from 'react';
import Card from './Card';

const Cards = (props) => {
    const [clicked, setClicked] = React.useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
    return (
        <div>
            {props.pokemons.map(pokemon =>
                <Card
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.types[0].type.name}
                    image={pokemon.sprites.other.home.front_default}
                    weight={pokemon.weight}
                    height={pokemon.height}
                    clicked={clicked}
                    onClick={handleClick}
                />
            )}
        </div>
    );
};

export default Cards;
