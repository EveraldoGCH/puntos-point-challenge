import Button from '../Button/Button';
import styles from './Header.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.hijo1}>
        <Button title="Dashboard" disabled={false} />
        <Button title="Clientes" disabled={false} />
        <Button title="Reglas de acumulación" disabled={false} />
      </div>
      <div className={styles.hijo2}>
        <p className={styles.textoDropdown}>Everaldo Guevara</p>
        <KeyboardArrowDownIcon />
      </div>
    </header>
  );
};

export default Header;
