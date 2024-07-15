import styles from "./styles.module.css";
export default function Catigorys({ catigorys, catigory, HandleCatigory }) {
  // console.log(catigorys);
  return (
    <div className={styles.catigorys_box}>
      <button
        className={"All" === catigory ? styles.activ : styles.catigory}
        onClick={() => {
          HandleCatigory("All");
        }}
      >
        All
      </button>

      {catigorys?.map((item) => {
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
