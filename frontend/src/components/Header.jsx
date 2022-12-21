import styles from "../styles/Header.module.css";

function Header({ type, setType, uniqueTypes }) {
  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <header className={styles.header}>
      <select
        className={styles.select}
        name="pokemon-type"
        id="pokemon-type"
        value={type}
        onChange={handleChange}
      >
        <option value="All">All</option>
        {uniqueTypes.map((uniqueType) => (
          <option value={uniqueType}>{uniqueType}</option>
        ))}
      </select>
    </header>
  );
}

export default Header;
