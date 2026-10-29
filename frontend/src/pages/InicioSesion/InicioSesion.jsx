import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Alerta from '../../components/Alerta';

function InicioSesion() {

    const navigate = useNavigate();

    //Variables sueltas
    const regexEmail = new RegExp(".*@(gmail.com|profesor.duoc.cl|duoc.cl)");
    const arrayUsuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];
    const usuarioActivo = JSON.parse(localStorage.getItem("UsuarioActivo")) || "";
    // const arrayCredencialesUsuarios = arrayUsuarios.flatMap( regUsuario => [ [regUsuario.email,regUsuario.password,regUsuario.nombre] ] );

    //Objetos Hook useState
    const [inputEmail, setInputEmail] = useState("");
    const [inputPass, setInputPass] = useState("");
    // const [listaUsuarios, setListaUsuarios] = useState( JSON.parse(localStorage.getItem("Usuarios")) || [] );

    const [alertas, setAlertas] = useState([]);
    const [tipoAlerta, setTipoAlerta] = useState('');

    //Funciones
    function validarCampos(){
        event.preventDefault();

        let mensajesErrores = [];
        let nombreValidado = "";
        let esAdmin = false;

        if( inputEmail.trim()=="" ) { mensajesErrores.push(`Email vacio`); }
        if( !regexEmail.test(inputEmail) ) { mensajesErrores.push(`Formato email incorrecto`); }
        if( inputPass.trim()=="" ) { mensajesErrores.push(`Contraseña vacia`); }

        if (inputEmail === "admin@duoc.cl" && inputPass === "admin1234"){
            const adminUser = {email: "admin@duoc.cl", nombre: "Administrador", rol: "admin"};
            localStorage.setItem("UsuarioActivo", JSON.stringify(adminUser));
            nombreValidado = "Administrador";
            esAdmin = true;
        } else {
            for( let regUsuario of arrayUsuarios ){
                if( inputEmail===regUsuario.email && inputPass===regUsuario.password ) {
                    console.log('Validado: ' + regUsuario.email + ' - ' + regUsuario.nombre);
                    localStorage.setItem("UsuarioActivo", JSON.stringify(regUsuario));
                    nombreValidado = regUsuario.nombre;
                }
            }
        }
        if( JSON.parse(localStorage.getItem("UsuarioActivo"))==="" ) { mensajesErrores.push(`Credenciales no verificadas`); }

        setAlertas( (mensajesErrores.length>0 ? mensajesErrores : [`Inicio sesión correcto: ${usuarioActivo}`]) )
        setTipoAlerta( (mensajesErrores.length>0 ? `error` : `success`) )
        if (window.M) window.M.toast({ html: ( nombreValidado!=="" ? `Saludos ${nombreValidado}` : `Acceso negado` ) });

        if (mensajesErrores.length === 0 && esAdmin){
            setTimeout(() => {
                navigate('/admin');
            }, 1000);
        }

    }

    
    // function testMostrarUsuarios(){
    //     console.log(`arrayUsuarios[0].nombre:: ${typeof( arrayUsuarios[0].nombre )} - ${ arrayUsuarios[0].nombre }`);
    // }

    //Gatillantes Hook useEffect
    // useEffect( () => {},[] )

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