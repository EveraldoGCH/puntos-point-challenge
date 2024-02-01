import styles from "./ChartsDashBoard.module.css"
import { FiltrosChart, Tabla } from "../"
import BarChart from "../BarChart/BarChart";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import DownloadIcon from '@mui/icons-material/Download';
import { ChartsDashBoardProps } from "./type";
import useFilterGraphic from "../../hooks/useFilterGraphic";


const ChartsDashBoard: React.FC<ChartsDashBoardProps> = ({QueryData}) => {
    const { graficoPulso } = useAppSelector(state => state.filtros)
    const { grafico, pulso } = graficoPulso
    const dispatch = useAppDispatch();
    const { labelsChart, dataChart } = useFilterGraphic()


    return (
        <article className={styles.ChartsContainer}>
            <FiltrosChart />
            <div className={styles.Chart}>
                {grafico ? <BarChart QueryData={QueryData} dataChart={dataChart} labelsChart={labelsChart}/>: "PULSO"}
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