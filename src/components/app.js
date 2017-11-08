import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import logo from '../logo.svg';
import Banner from '../images/PokemonBanner.gif';
import '../style.css';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';

import SearchBar from '../containers/search_bar';
import PokemonList from '../containers/pokemon_list';

const ROOT_URL = `https://api.pokemontcg.io/v1/cards?name=`;

var divStyle = {
    padding: "20px",
    margin: "20px",
    width: "45%"
  };

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
            pokemons: []
    };

    this.pokemonSearch('Energy Pickup');
  }


  pokemonSearch(term) {
console.log("hello");
      axios.get(`${ROOT_URL}${term}`)
      .then(response => {
        this.setState({
            pokemons: response.data.cards
        });
      })
      .catch((error) => {
        console.log("error",error);
      })
  }
  

  render() {
    const pokemonSearch = _.debounce((term) => { this.pokemonSearch(term) }, 300);
    
    return (
      <div className="container">
        <img src={Banner} style={divStyle} />
        <SearchBar  onSearchTermChange={pokemonSearch} />
        <PokemonList pokemons={this.state.pokemons} />
        
            <div className="row">
            <Link to="/page/one">
                Next Page
            </Link>
            </div>
      </div>
    );
  }
}

export default App;
