import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Alerta from '../../components/Alerta';

function Contacto() {

    const [txtNombre, setTxtNombre] = useState("");
    const [txtEmail, setTxtEmail] = useState("");
    const [txtMensaje, setTxtMensaje] = useState("");

    const [mensajesAlerta, setMensajesAlerta] = useState([]);
    const [tipoAlerta, setTipoAlerta] = useState("");

    useEffect(() => {
        if (typeof M !== 'undefined' && M.updateTextFields){
            M.updateTextFields();
        }
    }, [txtNombre, txtEmail, txtMensaje]);

    function guardar (e) {
        e.preventDefault();

        let errores = [];

        if (txtNombre.trim().length === 0){
            errores.push("El nombre no debe estar vacío.");
        }

        if (txtEmail.trim().length === 0){
            errores.push("El correo no debe estar vacío.");
        }else{
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(txtEmail)){
                errores.push("Ingrese un formato de correo válido.");
            }
        }

        if (txtMensaje.trim().length === 0){
            errores.push("El mensaje no debe estar vacío.")
        }

        if (errores.length > 0){
            setMensajesAlerta(errores);
            setTipoAlerta("error");
            return;
        }

        const nuevoContacto = {
            nombre: txtNombre,
            email: txtEmail,
            mensaje: txtMensaje,
            fecha: new Date().toLocaleString()
        };

        const contactosGuardados = JSON.parse(localStorage.getItem('mensajes_contacto')) || [];
        contactosGuardados.push(nuevoContacto);
        localStorage.setItem('mensajes_contacto', JSON.stringify(contactosGuardados));

        setMensajesAlerta(["Mensaje enviado con exito"]);
        setTipoAlerta("success");

        console.log("GUARDADO EN LOCALSTORAGE...")

        //limpia campos de formulario despues de guardar
        setTxtNombre("");
        setTxtEmail("");
        setTxtMensaje("");
    }

    

    return (
        <>
            <Navbar />
            <main>
                <div className='container' style={{ paddingTop: '40px', paddingBottom: '60px' }}>
                    <h3 className='texto-main'>Contacto</h3>

                    <div style={{marginBottom: '20px'}}>
                        <Alerta mensajes={mensajesAlerta} tipo= {tipoAlerta}></Alerta>
                    </div>

                    <div className='card-panel z-depth-1' style={{borderRadius: '8px', padding: '30px'}}>
                        
                        <form onSubmit={guardar}>
                            <div className='row'>
                                <div className='input-field col s12 m6'>
                                    <input onChange={(e) => setTxtNombre(e.target.value)}
                                    value={txtNombre}
                                    id='txtNombre'
                                    type='text'/>
                                    <label htmlFor="txtNombre">Nombre:</label>
                                </div>

                                <div className='input-field col s12 m6'>
                                    <input onChange={(e) => setTxtEmail(e.target.value)}
                                    value={txtEmail}
                                    id='txtEmail'
                                    type='text'/>
                                    <label htmlFor="txtEmail">Correo electrónico:</label>
                                </div>

                                <div className='input-field col s12 m6'>
                                    <input onChange={(e) => setTxtMensaje(e.target.value)}
                                    value={txtMensaje}
                                    id='txtMensaje'
                                    type='text'/>
                                    <label htmlFor="txtMensaje">Mensaje:</label>
                                </div>

                                <div className='col s12' style={{marginTop: '10px'}}>
                                    <button className='btn waves-effect waves-light pink lighten-1' type='submit'>
                                        Guardar
                                        <i className='material-icons right'>send</i>
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>


                </div>
            </main>
            <Footer />
        </>
    );
};

export default Contacto;