import { useEffect, useState } from "react";
import styles from "./Button.module.css"
import { ButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({ title, disabled }) => {
const [clases, setClases]=useState("")    

    useEffect(()=>{
        let ubicacion=window.location.pathname;
        ubicacion=ubicacion?.replace("/","")
        if (disabled) {
            setClases(`${styles.disabled} ${styles.button}`)
        }
        else{
            if(ubicacion==title.toLocaleLowerCase()){
                setClases(`${styles.available} ${styles.button}`)
            }
            else{
                setClases(`${styles.button} ${styles.notClicked}`)
            }
        }
    },[])

    return (
        <div className={clases}>
            <p className={styles.p}>{title}</p>
        </div>
    );
}

export default Button;