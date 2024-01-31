import styles from "./FiltrosCharts.module.css"
import Chips from "../Chip/Chips";
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { useAppSelector } from "../../redux/hooks";
import CheckIcon from '@mui/icons-material/Check';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const FiltrosChart: React.FC = () => {
    const { graficoPulso } = useAppSelector(state => state.filtros)
    const { grafico, pulso } = graficoPulso

    return (
        <article className={styles.FiltrosContainer}>
            <div className={styles.Filtro1Cont}>
                <div className={styles.Filtro1}>{/* Filtro 1 */}
                    <Chips label="HOY" />
                    <Chips label="6M" />
                    <Chips label="YTD/YTG" />
                    <Chips label="1A" />
                    <Chips label="MÁX" />
                    <Chips label="Personalizado" icon={<InsertInvitationIcon />} />
                </div>
                {grafico?<div className={styles.detailsCont}>
                    <RemoveRedEyeIcon color="inherit"/>
                    <p>Ver detalles</p>
                </div>
                :
                ""}
            </div>
            {pulso ?
                <div className={styles.Filtro} style={{ width: "30%" }}>{/* Filtro 2 pulso*/}
                    <Chips label="Todos" />
                    <Chips label="Sep" />
                    <Chips label="Oct" />
                    <Chips label="Nov" />
                </div>
                :
                <div className={styles.Filtro2Cont}>{/* Filtro 2 grafico*/}
                    <div className={styles.Filtro2}>
                        <Chips label="Clientes" icon={<CheckIcon />} style={{ border: "1px solid gray" }} />
                        <Chips label="Transacciones" style={{ border: "1px solid gray" }} />
                    </div>
                    {grafico?<div className={styles.Filtro2}>
                        <Chips label="Dinero" style={{ border: "1px solid gray" }} />
                        <Chips label="Cashback" style={{ border: "1px solid gray" }} />
                    </div>:""}
                </div>}

        </article>
    );
}

export default FiltrosChart;