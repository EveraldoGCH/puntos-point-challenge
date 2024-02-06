import styles from './Tabla.module.css';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import filterResults from '../../utils/filterResults/filterResults';
import { FilterResults } from '../../utils/types';
import { formatFilter } from '../../utils/helpers/formatFilters';
import { Tooltip } from '@mui/material';

const Tabla: React.FC = () => {
  const { graficoPulso, filtroFechas, filtClienteTransacc } = useAppSelector(
    (state) => state.filtros
  );
  const { grafico, pulso } = graficoPulso;
  const dispatch = useAppDispatch();

  return (
    <div className={styles.Grid}>
      <section className={styles.Column1}>
        <p className={styles.TitleColumn}>{filtroFechas}</p>
        <br />
        <p>
          {filterResults[formatFilter(filtroFechas).toLowerCase()].tableTitle1}
        </p>
        <br />
        {filterResults[
          formatFilter(filtroFechas).toLowerCase()
        ].titleColumns.map((elm, i) => (
          <p className={styles.TitleColumn} key={i}>
            {elm}
          </p>
        ))}
      </section>
      <section className={styles.Column2Cont}>
        {filtClienteTransacc}
        <p className={styles.TitleColumn}></p>
        <div className={styles.ColumnContent}>
          <div className={styles.Column}>
            <p>Columna 1</p>
            <br />
            <p>Semana</p>
            <br />
            <Tooltip title="00" arrow>
              <p>00</p>
            </Tooltip>
            <Tooltip title="00" arrow>
              <p>00</p>
            </Tooltip>
            <Tooltip title="Miércoles" arrow>
              <p>Miércoles</p>
            </Tooltip>
            <Tooltip title="Jueves" arrow>
              <p>Jueves</p>
            </Tooltip>
            <Tooltip title="00" arrow>
              <p>00</p>
            </Tooltip>
            <Tooltip title="Sábado" arrow>
              <p>Sábado</p>
            </Tooltip>
            <Tooltip title="Domingo" arrow>
              <p>Domingo</p>
            </Tooltip>
          </div>
          <div className={styles.Column}>
            <p>Columna 2</p>
            <br />
            <p>Semana</p>
            <br />
            <Tooltip title="00" arrow>
              <p>00</p>
            </Tooltip>
            <Tooltip title="00" arrow>
              <p>00</p>
            </Tooltip>
            <Tooltip title="Miércoles" arrow>
              <p>Miércoles</p>
            </Tooltip>
            <Tooltip title="Jueves" arrow>
              <p>Jueves</p>
            </Tooltip>
            <Tooltip title="00" arrow>
              <p>00</p>
            </Tooltip>
            <Tooltip title="Sábado" arrow>
              <p>Sábado</p>
            </Tooltip>
            <Tooltip title="Domingo" arrow>
              <p>Domingo</p>
            </Tooltip>
          </div>
          <div className={styles.Column}>
            <p>Columna 3</p>
            <br />
            <p>Semana</p>
            <br />
            <Tooltip title="00" arrow>
              <p>00</p>
            </Tooltip>
            <Tooltip title="00" arrow>
              <p>00</p>
            </Tooltip>
            <Tooltip title="Miércoles" arrow>
              <p>Miércoles</p>
            </Tooltip>
            <Tooltip title="Jueves" arrow>
              <p>Jueves</p>
            </Tooltip>
            <Tooltip title="00" arrow>
              <p>00</p>
            </Tooltip>
            <Tooltip title="Sábado" arrow>
              <p>Sábado</p>
            </Tooltip>
            <Tooltip title="Domingo" arrow>
              <p>Domingo</p>
            </Tooltip>
          </div>
          <div className={styles.Column}>
            <p>Total</p>
            <br />
            <p>Semana</p>
            <br />
            <Tooltip title="00" arrow>
              <p>00</p>
            </Tooltip>
            <Tooltip title="00" arrow>
              <p>00</p>
            </Tooltip>
            <Tooltip title="Miércoles" arrow>
              <p>Miércoles</p>
            </Tooltip>
            <Tooltip title="Jueves" arrow>
              <p>Jueves</p>
            </Tooltip>
            <Tooltip title="00" arrow>
              <p>00</p>
            </Tooltip>
            <Tooltip title="Sábado" arrow>
              <p>Sábado</p>
            </Tooltip>
            <Tooltip title="Domingo" arrow>
              <p>Domingo</p>
            </Tooltip>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tabla;
