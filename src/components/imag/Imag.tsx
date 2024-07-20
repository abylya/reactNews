

import styles from "./styles.module.css";
interface Props{
    imgSrc:string;
    imgClass:string;
  }
export default function Imag({imgSrc,imgClass}:Props) {
    return(   
    
        <div className={imgClass?styles[imgClass]:styles.imgBlock}>
            {imgSrc?<img src={imgSrc} alt="banner" />:null}
            
        </div>
    )

}