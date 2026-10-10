import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Alerta from '../../components/Alerta';

function InicioSesion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertas, setAlertas] = useState([]);
  const [tipoAlerta, setTipoAlerta] = useState('');
  const navigate = useNavigate();

  const intentarInicioSesion = (event) => {
    event.preventDefault();

    const regexEmail = new RegExp(".*@(gmail.com|profesor.duoc.cl|duoc.cl)");
    let mensajesErrores = [];

    // Validaciones
    if (!email.trim()) {
      mensajesErrores.push("Email requerido");
    } else if (!regexEmail.test(email)) {
      mensajesErrores.push("Email no aceptado (debe ser @gmail.com, @profesor.duoc.cl o @duoc.cl)");
    }

    if (password.length < 4 || password.length > 10) {
      mensajesErrores.push("Contraseña debe tener un largo entre 4 a 10 caracteres");
    }

    // Actualización de estados para la Alerta y Toast
    if (mensajesErrores.length > 0) {
      setAlertas(mensajesErrores);
      setTipoAlerta('error');

      if (window.M) window.M.toast({ html: mensajesErrores.join(' / ') });
    } else {
      setAlertas([`Sesión iniciada de ${email}`]);
      setTipoAlerta('success');

      if (window.M) window.M.toast({ html: "Sesión iniciada de " + email });

      setEmail('');
      setPassword('');

      // navigate('/');
    }
  };

  return (
    <>
      <Navbar />

      <main>
        <section id="formulario">
          <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
            <h3>Iniciar sesión</h3>

            {/* Inyección del componente Alerta */}
            <Alerta mensajes={alertas} tipo={tipoAlerta} />

            <form id="formularioInicio" onSubmit={intentarInicioSesion} noValidate>
              <div className="row">
                <div className="col s12 m6">
                  <div className="contenedor-input">
                    <label htmlFor="txtEmail">Email:</label>
                    <input
                      id="txtEmail"
                      className="form-control"
                      type="email"
                      placeholder="Ingrese su email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col s12 m6">
                  <div className="contenedor-input">
                    <label htmlFor="txtPassword">Contraseña:</label>
                    <input
                      id="txtPassword"
                      className="form-control"
                      type="password"
                      placeholder="Ingrese su contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col s12 m12 contenedor-btn" style={{ marginTop: '20px' }}>
                  <button type="submit" className="btn btn btn-success">
                    Ingresar
                  </button>
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