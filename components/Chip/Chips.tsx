import styles from "./Chips.module.css"
import { FiltrosChart } from "../"
import BarChart from "../BarChart/BarChart";
import { ChipsProps, Variant } from "./type";
import Chip from '@mui/material/Chip';
import { setFiltroClienteTransacc, setFiltroDineroCashBack, setFiltroFechas, setFiltroMes } from "../../redux/slices/FiltrosSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { Filtros } from "../../utils/types";


const Chips: React.FC<ChipsProps> = ({ label, icon, tipoFiltro, style }) => {
    const { filtros } = useAppSelector(state => state)
    const dispatch = useAppDispatch();

    const handleClick = () => {
        if(tipoFiltro===Filtros.FiltroFecha){
            dispatch(setFiltroFechas(label))
        }
        else if(tipoFiltro===Filtros.FiltroClienteTransacc){
            dispatch(setFiltroClienteTransacc(label))
        }
        else if(tipoFiltro===Filtros.FiltroDineroCashBack){
            dispatch(setFiltroDineroCashBack(label))
        }
        else if(tipoFiltro===Filtros.FiltroMes){
            dispatch(setFiltroMes(label))
        }
    }

    if (!!icon) {
        return <Chip icon={icon} label={label} key={label} className={`${styles.ChipCustom}`} onClick={() => handleClick()} variant={Object.values(filtros).includes(label)?Variant.filled:Variant.outlined} style={!!style?Object.values(filtros).includes(label)?{}:style:{}}/>
    }
    else {
        return <Chip label={label} key={label} className={`${styles.ChipCustom}`} variant={Object.values(filtros).includes(label)?Variant.filled:Variant.outlined} onClick={() => handleClick()} style={!!style?Object.values(filtros).includes(label)?{}:style:{}} />
    }
}

export default Chips;