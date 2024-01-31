import styles from "./FiltrosCharts.module.css"
import Chips from "../Chip/Chips";
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { useAppSelector } from "../../redux/hooks";
import CheckIcon from '@mui/icons-material/Check';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Filtros } from "../../utils/types";


const FiltrosChart: React.FC = () => {
    const { graficoPulso } = useAppSelector(state => state.filtros)
    const { grafico, pulso } = graficoPulso

    return (
        <article className={styles.FiltrosContainer}>
            <div className={styles.Filtro1Cont}>
                <div className={styles.Filtro1}>{/* Filtro 1 */}
                    <Chips label="HOY" tipoFiltro={Filtros.FiltroFecha}/>
                    <Chips label="6M" tipoFiltro={Filtros.FiltroFecha}/>
                    <Chips label="YTD/YTG" tipoFiltro={Filtros.FiltroFecha}/>
                    <Chips label="1A" tipoFiltro={Filtros.FiltroFecha}/>
                    <Chips label="MÁX" tipoFiltro={Filtros.FiltroFecha}/>
                    <Chips label="Personalizado" icon={<InsertInvitationIcon />} tipoFiltro={Filtros.FiltroFecha}/>
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
                    <Chips label="Todos" tipoFiltro={Filtros.FiltroMes}/>
                    <Chips label="Sep" tipoFiltro={Filtros.FiltroMes}/>
                    <Chips label="Oct" tipoFiltro={Filtros.FiltroMes}/>
                    <Chips label="Nov" tipoFiltro={Filtros.FiltroMes}/>
                </div>
                :
                <div className={styles.Filtro2Cont}>{/* Filtro 2 grafico*/}
                    <div className={styles.Filtro2}>
                        <Chips label="Clientes" icon={<CheckIcon />} style={{ border: "1px solid gray" }} tipoFiltro={Filtros.FiltroClienteTransacc}/>
                        <Chips label="Transacciones" style={{ border: "1px solid gray" }} tipoFiltro={Filtros.FiltroClienteTransacc}/>
                    </div>
                    {grafico?<div className={styles.Filtro2}>
                        <Chips label="Dinero" style={{ border: "1px solid gray" }} tipoFiltro={Filtros.FiltroDineroCashBack}/>
                        <Chips label="Cashback" style={{ border: "1px solid gray" }} tipoFiltro={Filtros.FiltroDineroCashBack}/>
                    </div>:""}
                </div>}

        </article>
    );
}

export default FiltrosChart;