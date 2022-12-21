import styles from "../styles/PokemonCard.module.css";

function PokemonCard({ id, name, img, types }) {
  return (
    <div className={styles.card}>
      <img src={img} alt={name} />
      <p className={styles.name}>{name}</p>
      <ul className={styles["type-list"]}>
        {types.map((type) => (
          <ul
            key={`${id}-${type}`}
            className={`${styles["type-list-item"]} ${styles[type]}`}
          >
            {type}
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default PokemonCard;
