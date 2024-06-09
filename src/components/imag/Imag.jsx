

import styles from "./styles.module.css";
export default function Imag({imgSrc,imgClass}) {
    return(   
    
        <div className={imgClass?styles[imgClass]:styles.imgBlock}>
            {imgSrc?<img src={imgSrc} alt="banner" />:null}
            
        </div>
    )

}