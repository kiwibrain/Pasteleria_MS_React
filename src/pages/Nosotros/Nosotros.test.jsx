import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Nosotros from './Nosotros';

describe('Pruebas en la vista Nosotros', () => {
  test('Renderiza la imagen principal de la pastelería', () => {
    render(
      <MemoryRouter>
        <Nosotros />
      </MemoryRouter>
    );

    // 1. Buscamos la imagen en el documento
    // Como tu imagen tiene alt="", buscar por rol es la mejor opción
    const imagenPasteleria = screen.getByAltText('interiorPasteleria');

    // 2. Verificamos que exista en el HTML
    expect(imagenPasteleria).toBeInTheDocument();

    // 3. Verificamos que la ruta de origen (src) sea la correcta
    expect(imagenPasteleria).toHaveAttribute('src', '/images/pasteleria.jpg');
  });
});