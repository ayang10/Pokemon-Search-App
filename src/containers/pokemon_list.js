import React from 'react';
import PokemonListItem from './pokemon_list_item';

const PokemonList = (props) => {
    
    const pokemonItems = props.pokemons.map((pokemon) => {
        return (
            <PokemonListItem 
                key={pokemon.id} 
                pokemon={pokemon} />
        );
    });

    return (
            // <div className="cards-container">
            //     {pokemonItems}
            // </div>
            <div>
                {pokemonItems}
            </div>
        
    );
}

export default PokemonList;