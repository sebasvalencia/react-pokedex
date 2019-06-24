import React from "react";

class PokemonCard extends React.Component {
  render() {
    const {name, photo, arrayTypes } = this.props.pokemon; 
    return (
      <figure className="grid-pokemon">
        <figcaption>
          <p className="name-pokemon">{name}</p>
        </figcaption>
        <div>
          <img src={photo} alt={name} />
        </div>
        <figcaption>
          <p>{arrayTypes.map(i => ` ${i} `)}</p>
        </figcaption>
      </figure>
    );
  }
}

export default PokemonCard;
