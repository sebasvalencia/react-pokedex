import React from "react";
import Axios from "axios";
import "./App.css";
import PokemonGrid from "./components/PokemonGrid";
import NotFound from './components/NotFound'

class App extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    pokemons: [],
    urlPokemons: []
  };

  componentWillMount() {
    console.log("MOUNTED!!");
    this.getPokemonsUrls();
  }

  getPokemonsUrls = async () => {
    console.log("requestInformation");
    const responseGetPokemonsUrl = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0`
    );
    //console.log(responseGetPokemonsUrl.data.results);
    this.setState({
      urlPokemons: responseGetPokemonsUrl.data.results
    });
    this.getPokemonsInformation(responseGetPokemonsUrl.data.results);
  };

  getPokemonsInformation = async arrayPokemosUrl => {
    const arrayPokemons = [];
    arrayPokemosUrl.map(pokemon => {
      Axios.get(pokemon.url).then(res => {
        const name = res.data.forms[0].name;
        const photo = res.data.sprites.front_default;
        const types = res.data.types;
        const id = res.data.id;
        const height = res.data.height;
        const weight = res.data.weight;
        const arrayTypes = [];
        types.map(typeOfPower => {
          arrayTypes.push(typeOfPower.type.name);
        });
        const pokemonObject = {
          name,
          photo,
          id,
          height,
          weight,
          arrayTypes
        };

        arrayPokemons.push(pokemonObject);
        this.setState({
          isLoaded: true,
          pokemons: arrayPokemons
        });
      });
      console.log(arrayPokemons);
    });
  };

  render() {
    const { isLoaded, pokemons } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="app">
          <header className="app-header">Pokedex app</header>

          <PokemonGrid pokemons={pokemons} />
        </div>
      );
    }
  }
}

export default App;
