import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Producto from './Producto';

test('Verificar que el botón diga "Añadir al carrito"', () => {
  render(
    <MemoryRouter>
      <Producto />
    </MemoryRouter>
  );

  const botonAñadir = screen.getByText('Comprar ahora');
  expect(botonAñadir).toBeInTheDocument();
});