import { useEffect, useState } from 'react';
import { ButtonProps } from './type';
import { formatFilter } from '../../utils/helpers/formatFilters';

const Button: React.FC<ButtonProps> = ({ title, disabled }) => {
  const [clases, setClases] = useState('');
  let titleLowerCase=formatFilter(title).toLowerCase()

  useEffect(() => {
    let ubicacion = window.location.pathname;
    ubicacion = ubicacion?.replace('/', '');
    if (disabled) {
      setClases(`disabled button`+" gtm-"+titleLowerCase);
    } else {
      if (ubicacion == title.toLocaleLowerCase()) {
        setClases(`available button`+" gtm-"+titleLowerCase);
      } else {
        setClases(`button notClicked`+" gtm-"+titleLowerCase);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={clases} >
      <p className={"p "+ "gtm-"+titleLowerCase}>{title}</p>
    </div>
  );
};

export default Button;
