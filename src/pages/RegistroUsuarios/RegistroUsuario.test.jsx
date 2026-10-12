import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { test, expect } from 'vitest';
import RegistroUsuario from './RegistroUsuario';

test('Validación de correos permitidos', ()=>{
    render(
        <MemoryRouter>
            <RegistroUsuario/>
        </MemoryRouter>
    );

    const regexEmail = new RegExp(".*@(gmail.com|profesor.duoc.cl|duoc.cl)");
    expect(regexEmail.test('juanin@gmail.com')).toBe(true);
});

test('Validación de correos NO permitidos', ()=>{
    render(
        <MemoryRouter>
            <RegistroUsuario/>
        </MemoryRouter>
    );

    const regexEmail = new RegExp(".*@(gmail.com|profesor.duoc.cl|duoc.cl)");
    expect(regexEmail.test('bodoque@yahoo.com')).toBe(true);
    
});
