import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button Component', () => {
  test('Renderiza el componente con el título proporcionado', () => {
    const title = 'Mi Botón';
    render(<Button title={title} disabled={false} />);

    // Verifica que el componente se renderice con el título
    expect(screen.getByText(title)).toBeInTheDocument();

    // Verifica que el componente tenga la clase de estilo correcta si no está deshabilitado
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText(title).closest('div')).toHaveClass('button');
  });

  test('Renderiza el componente deshabilitado con la clase de estilo "disabled"', () => {
    const title = 'Mi Botón Deshabilitado';
    render(<Button title={title} disabled={true} />);

    // Verifica que el componente se renderice con el título
    expect(screen.getByText(title)).toBeInTheDocument();

    // Verifica que el componente tenga la clase de estilo correcta para deshabilitado
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText(title).closest('div')).toHaveClass('disabled');
  });
});
