import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { test } from "vitest";
import Contacto from "./Contacto";

test("Probar Boton Contacto", () => {
    render(
        <MemoryRouter>
            <Contacto/>
        </MemoryRouter>
    )

    test('Verifica que el botón sea de tipo submit', () => {
        render(
            <MemoryRouter>
                <Contacto />
            </MemoryRouter>
        );

        const botonGuardar = screen.getByRole('button');
        expect(botonGuardar).toHaveAttribute('type', 'reset');
    });

});