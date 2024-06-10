import styles from "./styles.module.css";
export default function Skeleton({count}) {
  return (
     
     <ul className={styles.list}>
        {count>1 ? [...Array(count)].map((_,index)=>{
          return <li key={index} className={index===0?styles.banner:styles.item}></li>
        }):<li className={styles.banner}></li>}
      
     </ul>  

  )
}
    