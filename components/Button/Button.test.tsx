import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button Component', () => {
  test('Renderiza el componente con el título proporcionado', () => {
    const title = 'Mi Botón';
    const { getByText } = render(<Button title={title} disabled={false} />);

    // Verifica que el componente se renderice con el título
    expect(getByText(title)).toBeInTheDocument();

    // Verifica que el componente tenga la clase de estilo correcta si no está deshabilitado
    expect(getByText(title).closest('div')).toHaveClass('button');
  });

  test('Renderiza el componente deshabilitado con la clase de estilo "disabled"', () => {
    const title = 'Mi Botón Deshabilitado';
    const { getByText } = render(<Button title={title} disabled={true} />);

    // Verifica que el componente se renderice con el título
    expect(getByText(title)).toBeInTheDocument();

    // Verifica que el componente tenga la clase de estilo correcta para deshabilitado
    expect(getByText(title).closest('div')).toHaveClass('disabled');
  });
});
