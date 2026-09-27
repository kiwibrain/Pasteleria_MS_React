import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Carrito() {
    return (
        <>
            <Navbar />

            <main>
                <div className="container">
                    <div className="row">
                        <table>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>

                            <tbody id="tabla-carrito">

                            </tbody>
                            <tfoot>
                                <tr>
                                    <td coldspan="2" class="right-align"><b>Total a Pagar:</b></td>
                                    <td><b id="total-carrito">$0</b></td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="boton-continuar-compra col s5 m3 right">
                            <a className="waves-effect waves-light btn" onclick="">Continuar Comprando</a>
                        </div>
                        <div className="boton-pagar col s5 m3 right">
                            <a className="waves-effect waves-light btn" onclick="">Ir a Pagar</a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Carrito;