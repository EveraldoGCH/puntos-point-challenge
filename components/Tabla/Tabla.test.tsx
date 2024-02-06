import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tabla from './Tabla';
import filterResults from '../../utils/filterResults/filterResults';
import { formatFilter } from '../../utils/helpers/formatFilters';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('Tabla Component', () => {
  test('Renderiza el componente con los valores proporcionados', () => {
    // Simular los valores que se pasan por props al componente Tabla
    const filtros = {
      graficoPulso: {
        grafico: true,
        pulso: false,
      },
      filtroFechas: 'HOY',
      filtClienteTransacc: 'Clientes',
    };

    // Renderizar el componente Tabla con los valores simulados
    render(
      <Provider store={store}>
        <Tabla />
      </Provider>
    );

    // Verificar que el componente se renderice correctamente con los valores proporcionados
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText(filtros.filtroFechas)).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(
      screen.getByText(
        filterResults[formatFilter(filtros.filtroFechas).toLowerCase()]
          .tableTitle1
      )
    ).toBeInTheDocument();
  });
});
