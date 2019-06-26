import React from "react";
import { Link } from "react-router-dom";

class PokemonCard extends React.Component {
  render() {
    const { name, photo, arrayTypes } = this.props.pokemon;
    return (
      <figure className="grid-pokemon">
        <p className="name-pokemon">{name}</p>
        <div className="grid-photo-wrap">
          <Link
            to={{
              pathname: `/pokemonDetails/${name}`,
              state: {
                pokemon: this.props.pokemon
              }
            }}
          >
            <img className="grid-photo" src={photo} alt={name} />
          </Link>
        </div>
        <figcaption>
          <p>{arrayTypes.toString()}</p>
        </figcaption>
      </figure>
    );
  }
}

export default PokemonCard;
