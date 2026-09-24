import { useFormik } from "formik";
import React, { useState } from "react";

function RegistroUsuario() {

    // const [txtNombre, setTxtNombre] = useState('');
    // const [txtApellido, setTxtApellido] = useState('');
    // const [numEdad, setNumEdad] = useState(0);
    // const [txtEmail, setTxtEmail] = useState('');
    // const [txtPassword, setTxtPassword] = useState('')
    // const [txtPassConfirm, setTxtPassConfirm] = useState('');

    const formikRegistro = useFormik({
        initialValues: {
            txtNombre: '',
            txtApellido: '',
            numEdad: 0,
            txtEmail: '',
            txtPassword: '',
            txtPassConfirm: '',
        }
    })

    function almacenarVariables(){
        console.log("Flag inicio");
        
        console.log(`formikRegistro.values.txtEmail:: ${formikRegistro.values.txtEmail} -- ` + formikRegistro.values.txtEmail);
        console.log(`typeof(formikRegistro.values):: ${typeof(formikRegistro.values)} -- ` + typeof(formikRegistro.values));

        // console.log(`txtNombre:: ${txtNombre} -- ` + txtNombre);
        // console.log(`txtApellido:: ${txtApellido}`);
        // console.log(`numEdad:: ${numEdad}`);
        // console.log(`txtEmail:: ${txtEmail}`);
        // console.log(`txtPassword:: ${txtPassword}`);
        // console.log(`txtPassConfirm:: ${txtPassConfirm}`);

        console.log("Flag fin");
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
                                        <input id="txtNombre" className="form-control" type="text" placeholder="Ingrese su nombre"
                                            onChange={formikRegistro.handleChange} value={formikRegistro.values.txtNombre}
                                            max="100" required/>
                                    </div>
                                </div>

                                <div className="col s12 m6">
                                    <div className="contenedor-input">
                                        <label for="txtApellido">Apellido(s):</label>
                                        <input id="txtApellido" className="form-control" type="text" placeholder="Ingrese su apellido"
                                            onChange={formikRegistro.handleChange} value={formikRegistro.values.txtApellido}
                                            max="100" required/>
                                    </div>
                                </div>

                                <div className="col s12 m6">
                                    <div className="contenedor-input">
                                        <label for="numEdad">Edad:</label>
                                        <input id="numEdad" className="form-control" type="number" placeholder="Ingrese su edad"
                                            onChange={formikRegistro.handleChange} value={formikRegistro.values.numEdad}
                                            min="0" max="110" required/>
                                    </div>
                                </div>

                                <div className="col s12 m6">
                                    <div className="contenedor-input">
                                        <label for="txtEmail">Email:</label>
                                        <input id="txtEmail" className="form-control" type="email" placeholder="Ingrese su email"
                                            onChange={formikRegistro.handleChange} value={formikRegistro.values.txtEmail}
                                            max="100" pattern=".*@(gmail.com|profesor.duoc.cl|duoc.cl)" required/>

                                    </div>
                                </div>

                                <div className="col s12 m6">
                                    <div className="contenedor-input">
                                        <label for="txtPassword">Contraseña:</label>
                                        <input id="txtPassword" className="form-control" type="password" placeholder="Ingrese una contraseña"
                                            onChange={formikRegistro.handleChange} value={formikRegistro.values.txtPassword}
                                            min="4" max="10" required/>
                                    </div>
                                </div>

                                <div className="col s12 m6">
                                    <div className="contenedor-input">
                                        <label for="txtPassConfirm">Confirme Contraseña:</label>
                                        <input id="txtPassConfirm" className="form-control" type="password" placeholder="Ingrese su contraseña nuevamente"
                                            onChange={formikRegistro.handleChange} value={formikRegistro.values.txtPassConfirm}
                                            min="8" required/>
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