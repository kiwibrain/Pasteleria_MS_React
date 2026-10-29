import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import InicioSesion from './InicioSesion';


test('Prueba de boton del formulario', () => {
    render(
        <MemoryRouter>
            <InicioSesion/>
        </MemoryRouter>
    );

    expect(screen.getByRole('submit', { name: 'Ingresar' }));

  });