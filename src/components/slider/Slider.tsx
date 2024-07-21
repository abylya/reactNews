import React, { ReactElement, useRef } from "react";
import styles from "./styles.module.css";
interface Props{
  children:React.ReactElement;

}
export default function Slider({ children }:Props) {
  let sliderRef = useRef<HTMLElement|null>(null);
  function scrollLeft() {
    if(!sliderRef.current) return;
    sliderRef.current.scrollLeft -= 150;
  }
  function scrollRight() {
    if(!sliderRef.current) return;
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
