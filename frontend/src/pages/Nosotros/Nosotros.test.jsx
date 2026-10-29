import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Nosotros from './Nosotros';

test('Renderiza la imagen principal de la pastelería', () => {
  render(
    <MemoryRouter>
      <Nosotros />
    </MemoryRouter>
  );

  // 1. Buscamos la imagen en el documento por alt =, ya que hay mas de una imagen
  const imagenPasteleria = screen.getByAltText('interiorPasteleria');

  // 2. Verificamos que exista
  expect(imagenPasteleria).toBeInTheDocument();

  // 3. Verificamos que la ruta de origen (src) sea la correcta
  expect(imagenPasteleria).toHaveAttribute('src', '/images/pasteleria.jpg');
});

  