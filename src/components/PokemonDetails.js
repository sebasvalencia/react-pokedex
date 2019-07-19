import React from "react";
import { Link } from "react-router-dom";

class PokemonDetails extends React.Component {
  render() {

    const {
      name,
      photo,
      arrayTypes,
      id,
      height,
      weight
    } = this.props.location.state.pokemon;

    return (
      <div>
        <div className="grid-single-pokemon">
          <div className="container">
            <img src={photo} alt={name} />
            <p>
              Name:<label>{name}</label>
            </p>
            <p>
              Id:<label>{id}</label>
            </p>
            <p>
              Height:<label>{height}</label>
            </p>
            <p>
              Weight: <label>{weight}</label>
            </p>
            <p>
              Types:<label>{arrayTypes.map(i => ` ${i} `)}</label>
            </p>
          </div>
        </div>

        <div className="footer">
          <Link
            to={{
              pathname: `/app`,
              state: {
                email: this.props.location.state.email,
              }
            }}
          >
            Home
          </Link>
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
