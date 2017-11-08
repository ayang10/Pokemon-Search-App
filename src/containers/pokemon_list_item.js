import React from 'react';

const PokemonListItem = ({pokemon}) => {
   if(!pokemon){
       return(
           <div>Loading...</div>
       )
   }
    
    return (
        <a className="card">
          <div className="side front" style={{backgroundImage:'url(' + pokemon.imageUrl + ')'}} ></div>
        </a>
    )
};

export default PokemonListItem;