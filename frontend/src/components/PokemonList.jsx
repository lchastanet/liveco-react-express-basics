import styles from "../styles/PokemonList.module.css";
import PokemonCard from "./PokemonCard";

function PokemonList({ pokemons }) {
  return (
    <div className={styles["pokemon-list"]}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
