import styles from "./styles.module.css";
export default function Skeleton({ count = 1, type = "banner" }) {
  return (
    <>
      {count > 1 ? (
        <ul className={styles.list}>
          {[...Array(count)].map((_, index) => {
            return <li key={index} className={styles.item}></li>;
          })}
        </ul>
      ) : (
        <div className={styles.banner}></div>
      )}
    </>
  );
}
