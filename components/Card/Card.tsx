import styles from './Cards.module.css';
import { obtenerNumeroDeMes } from '../../utils/helpers/fechas';
import { CardProps } from './type';

const Card: React.FC<CardProps> = ({
  mes,
  clientes,
  VentasTotales,
  MontoTotal,
  Acumulado,
  Facturado1,
  Facturado2,
  Facturado3,
  isOpen,
  firstCard,
  position,
}) => {
  return (
    <article
      className={`${styles.Cards} ${isOpen ? styles.Open : `${firstCard ? '' : `${styles.Closed} ${styles.Closed2}`}`}`}
      style={{ top: `-${position * 2}vh` }}
    >
      <h4 className={styles.Titulo}>{mes}</h4>
      <div className={styles.CardHijo}>
        <div className={styles.Row}>
          <p className={styles.Texto}>Clientes</p>
          <p className={styles.Texto}>{clientes}</p>
        </div>
        <div className={styles.Row}>
          <p className={styles.Texto}>Ventas Totales</p>
          <p className={styles.Texto}>{VentasTotales}</p>
        </div>
        <div className={styles.Row}>
          <p className={styles.Texto}>Monto total</p>
          <p className={styles.Texto}>{MontoTotal}</p>
        </div>
        <h4 className={styles.Titulo2}>Cashback</h4>
        <div className={styles.Row}>
          <p className={styles.Texto}>Acumulado</p>
          <p className={styles.Texto}>{Acumulado}</p>
        </div>
        <div className={styles.Row}>
          <p className={styles.Texto}>Facturado 01/{obtenerNumeroDeMes(mes)}</p>
          <p className={styles.Texto}>{Facturado1}</p>
        </div>
        <div className={styles.Row}>
          <p className={styles.Texto}>Facturado 10/{obtenerNumeroDeMes(mes)}</p>
          <p className={styles.Texto}>{Facturado2}</p>
        </div>
        <div className={styles.Row}>
          <p className={styles.Texto}>Facturado 20/{obtenerNumeroDeMes(mes)}</p>
          <p className={styles.Texto}>{Facturado3}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
