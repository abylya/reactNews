import React, { useRef } from "react";
import styles from "./styles.module.css";
export default function Slider({ children }) {
  let sliderRef = useRef(null);
  function scrollLeft() {
    sliderRef.current.scrollLeft -= 150;
  }
  function scrollRight() {
    sliderRef.current.scrollLeft += 150;
  }
  return (
    <div className={styles.slider}>
      <button className={styles.arrow} onClick={scrollLeft}>
        {"<"}
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button className={styles.arrow} onClick={scrollRight}>
        {">"}
      </button>
    </div>
  );
}
