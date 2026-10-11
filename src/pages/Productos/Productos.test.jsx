import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import Productos from "./Productos";



test('Prueba del título principal del catálogo', () => {
    render(
        <MemoryRouter>
            <Productos />
        </MemoryRouter>
    )

    const pruebaTitulo = screen.getByText('Nuestros Productos');
    expect(pruebaTitulo).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Productos from './Productos';


test('Prueba renderizado de múltiples botones de "Agregar" para las cards', () => {
    render(
        <MemoryRouter>
            <Productos />
        </MemoryRouter>
    );

    const botonesAgregar = screen.getAllByText('Agregar');
    expect(botonesAgregar.length).toBeGreaterThan(5);
});
  