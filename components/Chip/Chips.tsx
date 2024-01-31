import styles from "./Chips.module.css"
import { FiltrosChart } from "../"
import BarChart from "../BarChart/BarChart";
import { ChipsProps, Variant } from "./type";
import Chip from '@mui/material/Chip';
import { setFiltroFechas } from "../../redux/slices/FiltrosSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";


const Chips: React.FC<ChipsProps> = ({ label, icon, style }) => {
    const { filtroFechas } = useAppSelector(state => state.filtros)
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setFiltroFechas(label))
    }

    if (!!icon) {
        return <Chip icon={icon} label={label} key={label} className={`${styles.ChipCustom}`} onClick={() => handleClick()} variant={filtroFechas === label?Variant.filled:Variant.outlined} style={!!style?filtroFechas === label?{}:style:{}}/>
    }
    else {
        return <Chip label={label} key={label} className={`${styles.ChipCustom}`} variant={filtroFechas === label?Variant.filled:Variant.outlined} onClick={() => handleClick()} style={!!style?filtroFechas === label?{}:style:{}} />
    }
}

export default Chips;