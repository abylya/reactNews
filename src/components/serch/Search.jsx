import styles from "./styles.module.css";
export default function Search({ keywords, setKeywords }) {
  return (
    <div className={styles.search}>
      <input
        name="search"
        type="text"
        className={styles.input}
        placeholder="java script"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
    </div>
  );
}
