import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Producto from './Producto';

test('Verificar que el botón diga "Añadir al carrito"', () => {
  // Preparamos localStorage con un producto falso
  const productoFalso = {
    id: 1,
    titulo: 'Torta de chocolate',
    precio_formateado: '$5.000',
    descripcion: 'Rica torta',
    ingredientes: ['chocolate', 'harina'],
    imagen: 'images/torta.webp',
  };
  localStorage.setItem('productoActual', JSON.stringify(productoFalso));

  render(
    <MemoryRouter>
      <Producto />
    </MemoryRouter>
  );

  const botonAñadir = screen.getByText('Añadir al carrito');
  expect(botonAñadir).toBeInTheDocument();
});