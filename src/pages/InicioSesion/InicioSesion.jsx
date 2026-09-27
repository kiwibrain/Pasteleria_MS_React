import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function InicioSesion() {
    return (
        <>
            <Navbar />
            <main>
                <section id="formulario">
                    <div className="container">
                        <h3>Iniciar sesión</h3>

                        <form id="formularioInicio" action="#">
                            <div className="row">
                                <div className="col s12 m6">
                                    <div className="contenedor-input">
                                        <label for="txtEmail">Email:</label>
                                        <input id="txtEmail" className="form-control" type="text" placeholder="Ingrese su email"/>
                                    </div>
                                </div>

                                <div className="col s12 m6">
                                    <div className="contenedor-input">
                                        <label for="txtPassword">Contraseña:</label>
                                        <input id="txtPassword" className="form-control" type="password"
                                            placeholder="Ingrese su contraseña"/>
                                    </div>
                                </div>


                                <div className="col s12 m6 contenedor-btn">
                                    <button type="submit" className="btn btn-success">Ingresar</button>
                                </div>


                            </div>
                        </form>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default InicioSesion;