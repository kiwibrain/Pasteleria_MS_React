import React from "react";

function RegistroUsuario() {

    function almacenarVariables(){
        console.log("Flag");
    }

    return (
        <>
            <main>
                <section id="formulario">
                    <div className="container">
                        <h3>Registrarse</h3>

                        <form id="formularioRegistro" action="#">
                            <div className="row">
                                <div className="col s12 m6">
                                    <div className="contenedor-input">
                                        <label for="txtNombre">Nombre(s):</label>
                                        <input id="txtNombre" className="form-control" type="text"
                                            placeholder="Ingrese su nombre" max="100"
                                            required/>
                                    </div>
                                </div>

                                <div className="col s12 m6">
                                    <div className="contenedor-input">
                                        <label for="txtApellido">Apellido(s):</label>
                                        <input id="txtApellido" className="form-control" type="text"
                                            placeholder="Ingrese su apellido" max="100"
                                            required/>
                                    </div>
                                </div>

                                <div className="col s12 m6">
                                    <div className="contenedor-input">
                                        <label for="numEdad">Edad:</label>
                                        <input id="numEdad" className="form-control" type="number"
                                            placeholder="Ingrese su edad" min="0" max="110"
                                            required/>
                                    </div>
                                </div>

                                <div className="col s12 m6">
                                    <div className="contenedor-input">
                                        <label for="txtEmail">Email:</label>
                                        <input id="txtEmail" className="form-control" type="email"
                                            placeholder="Ingrese su email" max="100"
                                            pattern=".*@(gmail.com|profesor.duoc.cl|duoc.cl)"
                                            required/>

                                    </div>
                                </div>

                                <div className="col s12 m6">
                                    <div className="contenedor-input">
                                        <label for="txtPassword">Contraseña:</label>
                                        <input id="txtPassword" className="form-control" type="password"
                                            placeholder="Ingrese una contraseña" min="4" max="10"
                                            required/>
                                    </div>
                                </div>

                                <div className="col s12 m6">
                                    <div className="contenedor-input">
                                        <label for="txtPassConfirm">Confirme Contraseña:</label>
                                        <input id="txtPassConfirm" className="form-control" type="password"
                                            placeholder="Ingrese su contraseña nuevamente" min="8"
                                            required/>
                                    </div>
                                </div>

                                <div className="col s12 m6 contenedor-btn">
                                    <button type="submit" className="btn btn-success" onClick={almacenarVariables}>Confirmar</button>
                                </div>

                            </div>
                        </form>

                    </div>
                </section>
            </main>
        </>
    );
};

export default RegistroUsuario;