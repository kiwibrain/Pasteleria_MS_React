import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect } from "vitest";
import Index from "./Index";



describe('Probar Index', () => {
  test('renderiza correctamente', () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    expect(document.body).toBeInTheDocument();
  });
});