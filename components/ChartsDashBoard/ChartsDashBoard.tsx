import styles from "./ChartsDashBoard.module.css"
import { FiltrosChart } from "../"
import BarChart from "../BarChart/BarChart";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";


const ChartsDashBoard: React.FC = () => {
    const { graficoPulso } = useAppSelector(state => state.filtros)
    const { grafico, pulso } = graficoPulso
    const dispatch = useAppDispatch();


    return (
        <article className={styles.ChartsContainer}>
            <FiltrosChart />
            <div className={styles.Chart}>
                {grafico?<BarChart />:"PULSO"}
            </div>
        </article>
    );
}

export default ChartsDashBoard;