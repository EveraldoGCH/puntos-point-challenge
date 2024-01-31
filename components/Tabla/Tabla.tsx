import styles from "./Tabla.module.css"
import { useAppSelector, useAppDispatch } from "../../redux/hooks";


const Tabla: React.FC = () => {
    const { graficoPulso } = useAppSelector(state => state.filtros)
    const { grafico, pulso } = graficoPulso
    const dispatch = useAppDispatch();


    return (
        <div className={styles.Grid}>
            <section className={styles.Column1}>
                <p className={styles.TitleColumn}>7 DÍAS</p>
                <br />
                <p>Semana</p>
                <br />
                <p>Lunes</p>
                <p>Martes</p>
                <p>Miércoles</p>
                <p>Jueves</p>
                <p>Viernes</p>
                <p>Sábado</p>
                <p>Domingo</p>
            </section>
            <section className={styles.Column2Cont}>
                <p className={styles.TitleColumn}>Clientes</p>
                <div className={styles.ColumnContent}>
                    <div className={styles.Column}>
                        <p>Columna 1</p>
                        <br />
                        <p>Semana</p>
                        <br />
                        <p>00</p>
                        <p>00</p>
                        <p>Miércoles</p>
                        <p>Jueves</p>
                        <p>00</p>
                        <p>Sábado</p>
                        <p>Domingo</p>
                    </div>
                    <div className={styles.Column}>
                        <p>Columna 2</p>
                        <br />
                        <p>Semana</p>
                        <br />
                        <p>00</p>
                        <p>00</p>
                        <p>Miércoles</p>
                        <p>Jueves</p>
                        <p>00</p>
                        <p>Sábado</p>
                        <p>Domingo</p>
                    </div>
                    <div className={styles.Column}>
                        <p>Columna 3</p>
                        <br />
                        <p>Semana</p>
                        <br />
                        <p>00</p>
                        <p>00</p>
                        <p>Miércoles</p>
                        <p>Jueves</p>
                        <p>00</p>
                        <p>Sábado</p>
                        <p>Domingo</p>
                    </div>
                    <div className={styles.Column}>
                        <p>Total</p>
                        <br />
                        <p>Semana</p>
                        <br />
                        <p>00</p>
                        <p>00</p>
                        <p>Miércoles</p>
                        <p>Jueves</p>
                        <p>00</p>
                        <p>Sábado</p>
                        <p>Domingo</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Tabla;