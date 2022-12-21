import { useState, useRef } from "react";
import axios from "axios";

import Footer from "./components/Footer";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import PokemonListTitle from "./components/PokemonListTitle";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [type, setType] = useState("All");

  const uniqueTypes = useRef([
    ...new Set(pokemons.map((pokemon) => pokemon.types).flat()),
  ]);

  axios
    .get(`http://localhost:8000/pokemon?type=${type}`)
    .then((res) => setPokemons(res.data));

  return (
    <>
      <Header type={type} setType={setType} uniqueTypes={uniqueTypes} />
      <main>
        <PokemonListTitle amoutOfPokemons={pokemons.length} />
        <PokemonList pokemons={pokemons} />
      </main>
      <Footer />
    </>
  );
}

export default App;
