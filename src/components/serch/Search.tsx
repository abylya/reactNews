

import styles from "./styles.module.css";

interface Props{
  keywords:string;
  setKeywords:(keyword:string,value:string)=>void;
}
export default function Search({ keywords, setKeywords }:Props) {
  return (
    <div className={styles.search}>
      <input
        name="search"
        type="text"
        className={styles.input}
        placeholder="java script"
        value={keywords || ""}
        onChange={(e) => setKeywords("keywords", e.target.value)}
      />
    </div>
  );
}
