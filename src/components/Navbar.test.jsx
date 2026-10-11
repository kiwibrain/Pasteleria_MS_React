import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import Navbar from "./Navbar";

test('1. Renderiza los enlaces principales de navegación', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Usamos getAllByText para evitar el conflicto de elementos duplicados (escritorio y móvil)
    expect(screen.getAllByText('Inicio')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Nosotros')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Contacto')[0]).toBeInTheDocument();
  });

