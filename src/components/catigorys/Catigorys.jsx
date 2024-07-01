import styles from "./styles.module.css";
export default function Catigorys({ catigorys, catigory, HandleCatigory }) {
  return (
    <div className={styles.catigorys_box}>
      {catigorys.map((item) => {
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
