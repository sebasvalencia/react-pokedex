import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./components/NotFound";
import PokemonDetails from "./components/PokemonDetails";
import PokemonGrid from "./components/PokemonGrid";
import Login from "./components/Login";

const Router = () => (
  <BrowserRouter>
    
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/app/" component={App} />
      <Route exact path="/gridPokemon" component={PokemonGrid}  />
      <Route exact path="/pokemonDetails/:name" component={PokemonDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
