import styles from "./ChartsDashBoard.module.css"
import { FiltrosChart, Tabla } from "../"
import BarChart from "../BarChart/BarChart";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import DownloadIcon from '@mui/icons-material/Download';
import { ChartsDashBoardProps } from "./type";
import useFilterGraphic from "../../hooks/useFilterGraphic";
import PulsoChart from "../PulsoChart/PulsoChart";


const ChartsDashBoard: React.FC<ChartsDashBoardProps> = ({QueryData}) => {
    const { graficoPulso } = useAppSelector(state => state.filtros)
    const { grafico, pulso } = graficoPulso
    const dispatch = useAppDispatch();


    return (
        <article className={styles.ChartsContainer}>
            <FiltrosChart />
            <div className={styles.Chart}>
                {/* No pude hacer la linea para el grafico de pulso ya que la docu de reac-charts era muy pobre */}
                {/* No pude hacer uso de charts de MAterialUI por errores con la version de Next y su compilado de modulos */}
                {grafico ? <BarChart QueryData={QueryData}/>: <PulsoChart QueryData={QueryData}/>}
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