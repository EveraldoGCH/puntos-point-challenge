import styles from "./Tabla.module.css"
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import filterResults from "../../utils/filterResults/filterResults";
import { FilterResults } from "../../utils/types";
import { formatFilter } from "../../utils/helpers/formatFilters";


const Tabla: React.FC = () => {
    const { graficoPulso, filtroFechas, filtClienteTransacc } = useAppSelector(state => state.filtros)
    const { grafico, pulso } = graficoPulso
    const dispatch = useAppDispatch();


    return (
        <div className={styles.Grid}>
            <section className={styles.Column1}>
                <p className={styles.TitleColumn}>{filtroFechas}</p>
                <br />
                <p>{filterResults[formatFilter(filtroFechas).toLowerCase()].tableTitle1}</p>
                <br />
                {filterResults[formatFilter(filtroFechas).toLowerCase()].titleColumns.map((elm) => <p className={styles.TitleColumn}>{elm}</p>)}
            </section>
            <section className={styles.Column2Cont}>
                {filtClienteTransacc}
                <p className={styles.TitleColumn}></p>
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