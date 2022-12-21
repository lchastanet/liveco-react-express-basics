import styles from "../styles/PokemonListTitle.module.css";

function PokemonListTitle({ amoutOfPokemons }) {
  return (
    <h1 className={styles.title}>
      <span className={styles.amount}>{amoutOfPokemons}</span> Pokémons
    </h1>
  );
}

export default PokemonListTitle;
