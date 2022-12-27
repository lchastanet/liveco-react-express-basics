import { useState, useEffect, useRef } from "react";
import axios from "axios";

import Footer from "./components/Footer";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import PokemonListTitle from "./components/PokemonListTitle";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [type, setType] = useState("All");

  const uniqueTypes = useRef([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/pokemon?type=${type}`).then((res) => {
      if (pokemons.length === 0) {
        uniqueTypes.current = [
          ...new Set(res.data.map((pokemon) => pokemon.types).flat()),
        ];
      }
      setPokemons(res.data);
    });
  }, [type]);

  return (
    <>
      <Header type={type} setType={setType} uniqueTypes={uniqueTypes.current} />
      <main>
        <PokemonListTitle amoutOfPokemons={pokemons.length} />
        <PokemonList pokemons={pokemons} />
      </main>
      <Footer />
    </>
  );
}

export default App;
