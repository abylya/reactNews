import styles from "./styles.module.css";
export default function Skeleton({ count = 1, direction='colum' }) {
  return (
    <>
      <ul className={direction === "colum" ? styles.columList : styles.rowList}>
        {[...Array(count)].map((_, index) => {
          return (
            <li key={index} className={styles.item}>
              banner
            </li>
          );
        })}
      </ul>
    </>
  );
}
