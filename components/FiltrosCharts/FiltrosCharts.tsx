import styles from "./FiltrosCharts.module.css"
import Chip from '@mui/material/Chip';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { useAppSelector } from "../../redux/hooks";
import CheckIcon from '@mui/icons-material/Check';



const FiltrosChart: React.FC = () => {
    const { graficoPulso } = useAppSelector(state => state.filtros)
    const { pulso } = graficoPulso

    return (
        <article className={styles.FiltrosContainer}>
            <div className={styles.Filtro}>{/* Filtro 1 */}
                <Chip label="PULSO" className={`${styles.ChipCustom} ${styles.ChipCustomSelected}`} />
                <Chip label="6M" variant="outlined" className={styles.ChipCustom} />
                <Chip label="YTD/YTG" variant="outlined" className={styles.ChipCustom} />
                <Chip label="1A" variant="outlined" className={styles.ChipCustom} />
                <Chip label="MÁX" variant="outlined" className={styles.ChipCustom} />
                <Chip icon={<InsertInvitationIcon />} label="Personalizado" variant="outlined" className={styles.ChipCustom} />
            </div>
            {pulso ?
                <div className={styles.Filtro} style={{ width: "30%" }}>{/* Filtro 2 */}
                    <Chip label="Todos" className={`${styles.ChipCustom} ${styles.ChipCustomSelected}`} />
                    <Chip label="Sep" variant="outlined" className={styles.ChipCustom} />
                    <Chip label="Oct" variant="outlined" className={styles.ChipCustom} />
                    <Chip label="Nov" variant="outlined" className={styles.ChipCustom} />
                </div>
                :
                <div className={styles.Filtro} style={{ width: "30%" }}>{/* Filtro 2 */}
                    <Chip label="Clientes" className={`${styles.ChipCustom} ${styles.ChipCustomSelected}`} icon={<CheckIcon />} />
                    <Chip label="Transacciones" variant="outlined" className={styles.ChipCustom} />
                </div>}

        </article>
    );
}

export default FiltrosChart;