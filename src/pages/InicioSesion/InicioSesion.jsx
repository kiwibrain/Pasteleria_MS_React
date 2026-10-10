import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Alerta from '../../components/Alerta';

function InicioSesion() {

    //Variables sueltas
    const regexEmail = new RegExp(".*@(gmail.com|profesor.duoc.cl|duoc.cl)");

    //Objetos Hook useState
    const [inputEmail, setInputEmail] = useState("");
    const [inputPass, setInputPass] = useState("");

    const [alertas, setAlertas] = useState([]);
    const [tipoAlerta, setTipoAlerta] = useState('');

    //Funciones
    function validarCampos(){
        let mensajesErrores = [];
        if( inputEmail.trim()=="" ) { mensajesErrores.push(`Email vacio`); }
        if( !regexEmail.test(inputEmail) ) { mensajesErrores.push(`Formato email incorrecto`); }
        if( inputPass.trim()=="" ) { mensajesErrores.push(`Contraseña vacia`); }
        //TODO: revisar par credenciales en local storage

        setAlertas( (mensajesErrores.length>0 ? mensajesErrores : [`Inicio sesión correcto`]) )
        setTipoAlerta( (mensajesErrores.length>0 ? `error` : `success`) )
    }

    return (
        <>
            <Navbar />
            <main>
                <section id="formulario">
                    <div className="container">
                        <h3>Iniciar sesión</h3>

                        <Alerta mensajes={alertas} tipo={tipoAlerta} />

                        <form id="formularioInicio" action="#">
                            <div className="row">
                                <div className="col s12 m6">
                                    <div className="contenedor-input">
                                        <label for="txtEmail">Email:</label>
                                        <input id="txtEmail" className="form-control" type="text" placeholder="Ingrese su email"
                                            onChange={ (event)=>{setInputEmail(event.target.value)} } />
                                    </div>
                                </div>

                                <div className="col s12 m6">
                                    <div className="contenedor-input">
                                        <label for="txtPassword">Contraseña:</label>
                                        <input id="txtPassword" className="form-control" type="password" placeholder="Ingrese su contraseña"
                                            onChange={ (event)=>{setInputPass(event.target.value)} } />
                                    </div>
                                </div>

                                <div className="col s12 m6 contenedor-btn">
                                    <button type="submit" className="btn btn-success" onClick={validarCampos}>Ingresar</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default InicioSesion;