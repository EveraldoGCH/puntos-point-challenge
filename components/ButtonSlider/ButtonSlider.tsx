import styles from "./ButtonSlider.module.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";
import { ButtonSliderProps } from "./type";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setGraficoPulsoFiltro } from "../../redux/slices/FiltrosSlice";


const ButtonSlider: React.FC<ButtonSliderProps> = ({ setOpenAcc, openAccordeon }) => {
    const { graficoPulso } = useAppSelector(state => state.filtros)
    const {grafico,pulso}=graficoPulso
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setGraficoPulsoFiltro({
            grafico:!grafico,
            pulso:!pulso
        }))
    }
    return (
        <main className={styles.ButtonCont}>
            <div className={styles.Buttons}>
                <div className={`${grafico ? `${styles.Button} ${styles.ButtonLeft} ${styles.selectedLeft}` : `${styles.Button} ${styles.ButtonLeft} ${styles.unselectedLeft}`}`} onClick={() => handleClick()}>
                    <BarChartIcon />
                    <p className={styles.texto}>Gráfico</p>
                </div>
                <div className={`${pulso ? `${styles.Button} ${styles.ButtonRight} ${styles.selectedRight}` : `${styles.Button} ${styles.ButtonRight} ${styles.unselectedRight}`}`} onClick={() => handleClick()}>
                    <StarIcon />
                    <p className={styles.texto}>Pulso</p>
                </div>
            </div>
            <div onClick={() => setOpenAcc(!openAccordeon)} className={styles.Icon}>
                {openAccordeon ? <KeyboardArrowUpIcon fontSize="large" /> : <KeyboardArrowDownIcon fontSize="large" />}
            </div>
        </main>
    );
}

export default ButtonSlider;