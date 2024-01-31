import styles from "./ChartsDashBoard.module.css"
import { FiltrosChart, Tabla } from "../"
import BarChart from "../BarChart/BarChart";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import DownloadIcon from '@mui/icons-material/Download';


const ChartsDashBoard: React.FC = () => {
    const { graficoPulso } = useAppSelector(state => state.filtros)
    const { grafico, pulso } = graficoPulso
    const dispatch = useAppDispatch();


    return (
        <article className={styles.ChartsContainer}>
            <FiltrosChart />
            <div className={styles.Chart}>
                {grafico ? <BarChart /> : "PULSO"}
            </div>
            <section className={styles.ExportCont}>
                <div className={styles.Export}>
                    <DownloadIcon />
                    <p>Exportar Tabla</p>
                </div>
            </section>
            <Tabla/>
        </article>
    );
}

export default ChartsDashBoard;