import { formatDate } from "../../helps/formatDate";
import styles from "./styles.module.css";
export default function Header(params) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Gooden Morgeen</h1>
      <p className={styles.date}>
      <time dateTime={new Date()}>
      {formatDate(new Date())}
      </time>
      </p>
    </header>
  );
}
    