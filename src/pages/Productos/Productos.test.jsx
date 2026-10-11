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

  