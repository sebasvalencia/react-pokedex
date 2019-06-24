import React from "react";
import { Link } from "react-router-dom";

class PokemonCard extends React.Component {
  render() {
    const { name, photo, arrayTypes } = this.props.pokemon;
    return (
      <figure className="grid-pokemon">
        <p className="name-pokemon">{name}</p>
        <div className="grid-photo-wrap">
          <Link to={`/pokemonDetails/${name}`}>
            <img className="grid-photo" src={photo} alt={name} />
          </Link>
        </div>
        <figcaption>
          <p>{arrayTypes.map(i => ` ${i} `)}</p>
        </figcaption>
      </figure>
    );
  }
}

export default PokemonCard;
