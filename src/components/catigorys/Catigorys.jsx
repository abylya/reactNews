import { forwardRef } from "react";
import styles from "./styles.module.css";
const Catigorys = forwardRef(({ catigorys, catigory, HandleCatigory }, ref) => {
  // console.log(catigorys);
  return (
    <div ref={ref} className={styles.catigorys_box}>
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
});

Catigorys.displayName = "Catigorys";
export default Catigorys;
