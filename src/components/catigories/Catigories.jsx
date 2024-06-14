import styles from "./styles.module.css";
export default function Catigories({ catigories, catigory, HandleCatigory }) {
  return (
    <div className={styles.catigories_box}>
      {catigories.map((item) => {
        return (
          <button
            key={item}
            className={item === catigory ? styles.activ : styles.catigory}
            onClick={() => {
              HandleCatigory(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
