import React from "react";
import "../App.css";
import PokemonCard from "./PokemonCard";

class PokemonGrid extends React.Component {
  render() {
    return (
      <div className="pokemons-grid">
        {this.props.pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} email={this.props.email} password={this.props.password} />
        ))}
      </div>
    );
  }
}

export default PokemonGrid;
