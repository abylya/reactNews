import { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";
import { CatigoriysType } from "../interfeces";
interface Props{
  catigorys:CatigoriysType[];
  catigory:CatigoriysType;
  HandleCatigory:(catigory:CatigoriysType)=>void
}
const Catigorys = forwardRef(({ catigorys, catigory, HandleCatigory }:Props, ref:ForwardedRef<HTMLDivElement>) => {
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
