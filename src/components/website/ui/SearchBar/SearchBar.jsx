import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <button className={styles.button}>🔍</button>
      <input type="text" placeholder="Buscar" className={styles.input} />
      
    </div>
  );
};

export default SearchBar;
