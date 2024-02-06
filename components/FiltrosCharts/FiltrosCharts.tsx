import styles from './FiltrosCharts.module.css';
import Chips from '../Chip/Chips';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { useAppSelector } from '../../redux/hooks';
import CheckIcon from '@mui/icons-material/Check';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Filtros } from '../../utils/types';

const FiltrosChart: React.FC = () => {
  const { graficoPulso, filtroFechas } = useAppSelector(
    (state) => state.filtros
  );
  const { grafico, pulso } = graficoPulso;

  return (
    <article className={styles.FiltrosContainer}>
      <div className={styles.Filtro1Cont}>
        {grafico ? (
          <div className={styles.Filtro1}>
            {/* Filtro 1 */}
            <Chips label="HOY" tipoFiltro={Filtros.FiltroFecha} />
            <Chips label="7D" tipoFiltro={Filtros.FiltroFecha} />
            <Chips label="Este mes" tipoFiltro={Filtros.FiltroFecha} />
            <Chips label="6M" tipoFiltro={Filtros.FiltroFecha} />
            <Chips label="YTD/YTG" tipoFiltro={Filtros.FiltroFecha} />
            <Chips label="1A" tipoFiltro={Filtros.FiltroFecha} />
            <Chips label="MÁX" tipoFiltro={Filtros.FiltroFecha} />
            <Chips
              label="Personalizado"
              icon={<InsertInvitationIcon />}
              tipoFiltro={Filtros.FiltroFecha}
            />
          </div>
        ) : (
          <div className={styles.Filtro1}>
            {/* Filtro 1 */}
            <Chips label="PULSO" tipoFiltro={Filtros.FiltroPulso} />
            <Chips label="6M" tipoFiltro={Filtros.FiltroPulso} />
            <Chips label="YTD/YTG" tipoFiltro={Filtros.FiltroPulso} />
            <Chips label="1A" tipoFiltro={Filtros.FiltroPulso} />
            <Chips label="MÁX" tipoFiltro={Filtros.FiltroPulso} />
            <Chips
              label="Personalizado"
              icon={<InsertInvitationIcon />}
              tipoFiltro={Filtros.FiltroFecha}
            />
          </div>
        )}
        {grafico ? (
          <div className={styles.detailsCont + " gtm-verdetalles"}>
            <RemoveRedEyeIcon color="inherit" />
            <p className={styles.detalles + " gtm-verdetalles"}>Ver detalles</p>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={styles.Filtro1Cont}>
        <div className={styles.Filtro1}>
          {filtroFechas === '7D' ? (
            <>
              <Chips label="Todo" tipoFiltro={Filtros.FiltroFechaDias} />
              <Chips label="Lunes" tipoFiltro={Filtros.FiltroFechaDias} />
              <Chips label="Martes" tipoFiltro={Filtros.FiltroFechaDias} />
              <Chips label="Miércoles" tipoFiltro={Filtros.FiltroFechaDias} />
              <Chips label="Jueves" tipoFiltro={Filtros.FiltroFechaDias} />
              <Chips label="Viernes" tipoFiltro={Filtros.FiltroFechaDias} />
              <Chips label="Sábado" tipoFiltro={Filtros.FiltroFechaDias} />
              <Chips label="Domingo" tipoFiltro={Filtros.FiltroFechaDias} />
            </>
          ) : (
            ''
          )}
        </div>
      </div>

      {pulso ? (
        <div className={styles.Filtro} style={{ width: '30%' }}>
          {/* Filtro 2 pulso*/}
          <Chips label="Todos" tipoFiltro={Filtros.FiltroMes} />
          <Chips label="Ene" tipoFiltro={Filtros.FiltroMes} />
          <Chips label="Feb" tipoFiltro={Filtros.FiltroMes} />
          <Chips label="Mar" tipoFiltro={Filtros.FiltroMes} />
        </div>
      ) : (
        <div className={styles.Filtro2Cont}>
          {/* Filtro 2 grafico*/}
          <div className={styles.Filtro2}>
            <Chips
              label="Clientes"
              icon={<CheckIcon />}
              style={{ border: '1px solid gray' }}
              tipoFiltro={Filtros.FiltroClienteTransacc}
            />
            <Chips
              label="Transacciones"
              style={{ border: '1px solid gray' }}
              tipoFiltro={Filtros.FiltroClienteTransacc}
            />
          </div>
          {grafico ? (
            <div className={styles.Filtro2}>
              <Chips
                label="Dinero"
                style={{ border: '1px solid gray' }}
                tipoFiltro={Filtros.FiltroDineroCashBack}
              />
              <Chips
                label="Cashback"
                style={{ border: '1px solid gray' }}
                tipoFiltro={Filtros.FiltroDineroCashBack}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      )}
    </article>
  );
};

export default FiltrosChart;
