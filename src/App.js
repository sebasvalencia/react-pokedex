import React from "react";
import Axios from "axios";
import "./App.css";
import PokemonGrid from "./components/PokemonGrid";
import Login from "./components/Login";
import Header from "./components/Header";

class App extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    pokemons: [],
    urlPokemons: [],
    filtratePokemons: [],
    email: "",
    password: "",
    isLogin: false
  };

  componentDidMount() {
    console.log("MOUNTED!");
    this.setState({
      email: this.props.location.state.email,
      password: this.props.location.state.password,
      isLogin: true
    });
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
        const { id, types, height, weight } = res.data;
        const name = res.data.forms[0].name;
        const photo = res.data.sprites.front_default;
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
          pokemons: arrayPokemons,
          filtratePokemons: arrayPokemons
        });
      });
      //console.log(arrayPokemons);
    });
  };

  filterPokemons = event => {
    let updatedPokemons = this.state.pokemons;
    const valueToSearch = event.target.value;
    if (valueToSearch !== "") {
      const pattern = new RegExp(valueToSearch);

      updatedPokemons = updatedPokemons.filter(item => {
        return (
          pattern.test(item.name.toLowerCase()) !== false ||
          pattern.test(item.arrayTypes.toString().toLowerCase()) !== false
        );
      });
    } else {
      updatedPokemons = this.state.pokemons;
    }

    this.setState({
      filtratePokemons: updatedPokemons
    });
  };

  render() {
    const { isLoaded, filtratePokemons, isLogin, email, password } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      if (!isLogin) {
        return <Login handleLogin={this.handleLogin} />;
      } else {
        return (
          <div className="app">
            <Header />
            <form>
              <fieldset className="form-group">
                <input
                  type="text"
                  className="form-control-search form-control-lg"
                  placeholder="Search..."
                  onChange={this.filterPokemons}
                />
              </fieldset>
            </form>
            <div className="">
              <PokemonGrid pokemons={filtratePokemons} isLogin={isLogin} email={email} password={password} />
            </div>
            }
          </div>
        );
      }
    }
  }
}

export default App;
