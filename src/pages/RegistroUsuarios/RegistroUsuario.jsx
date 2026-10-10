import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Alerta from '../../components/Alerta'; // Importamos la alerta reutilizable

const RegistroUsuario = () => {
  // Estado para capturar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    email: '',
    password: '',
    passConfirm: ''
  });

  // Estado para las alertas
  const [alertas, setAlertas] = useState([]);
  const [tipoAlerta, setTipoAlerta] = useState(''); // 'error' o 'success'

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Función de validación (traducida de tu JS original)
  const intentarRegistrarUsuario = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    let mensajesErrores = [];
    const regexEmail = new RegExp(".*@(gmail.com|profesor.duoc.cl|duoc.cl)");

    if (!formData.nombre) {
      mensajesErrores.push("Nombre requerido");
    } else if (formData.nombre.length > 100) {
      mensajesErrores.push("Nombre demasiado largo");
    }

    if (!formData.apellido) {
      mensajesErrores.push("Apellido requerido");
    } else if (formData.apellido.length > 100) {
      mensajesErrores.push("Apellido demasiado largo");
    }

    if (!formData.edad || formData.edad <= 0 || formData.edad > 110) {
      mensajesErrores.push("Edad no aceptada");
    }

    if (!formData.email) {
      mensajesErrores.push("Email requerido");
    } else if (!regexEmail.test(formData.email)) {
      mensajesErrores.push("Email no aceptado (debe ser @gmail.com, @profesor.duoc.cl o @duoc.cl)");
    }

    if (formData.password.length < 4 || formData.password.length > 10) {
      mensajesErrores.push("La contraseña debe tener entre 4 y 10 caracteres");
    }

    if (formData.password !== formData.passConfirm) {
      mensajesErrores.push("La contraseña es diferente en ambos campos");
    }

    // Lógica para mostrar errores o éxito
    if (mensajesErrores.length > 0) {
      setAlertas(mensajesErrores);
      setTipoAlerta('error');
      
      // Opcional: Mantener el Toast de Materialize como extra
      if (window.M) window.M.toast({ html: mensajesErrores.join(' / ') });
    } else {
      setAlertas([`Usuario ${formData.nombre} registrado correctamente`]);
      setTipoAlerta('success');
      
      // Opcional: Mantener el Toast de Materialize
      if (window.M) window.M.toast({ html: "Registrado usuario " + formData.nombre });
      
      // Aquí podrías limpiar el formulario si lo deseas:
      // setFormData({ nombre: '', apellido: '', edad: '', email: '', password: '', passConfirm: '' });
    }
  };

  return (
    <>
      <Navbar />

      <main>
        <section id="formulario">
          <div className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            <h3>Registrarse</h3>

            {/* Aquí inyectamos el componente reutilizable de Alerta */}
            <Alerta mensajes={alertas} tipo={tipoAlerta} />

            <form id="formularioRegistro" onSubmit={intentarRegistrarUsuario}>
              <div className="row">
                <div className="col s12 m6">
                  <div className="input-field">
                    <label htmlFor="txtNombre">Nombre(s):</label>
                    <input
                      id="txtNombre"
                      name="nombre"
                      type="text"
                      className="validate"
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col s12 m6">
                  <div className="input-field">
                    <label htmlFor="txtApellido">Apellido(s):</label>
                    <input
                      id="txtApellido"
                      name="apellido"
                      type="text"
                      className="validate"
                      value={formData.apellido}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col s12 m6">
                  <div className="input-field">
                    <label htmlFor="numEdad">Edad:</label>
                    <input
                      id="numEdad"
                      name="edad"
                      type="number"
                      className="validate"
                      value={formData.edad}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col s12 m6">
                  <div className="input-field">
                    <label htmlFor="txtEmail">Email:</label>
                    <input
                      id="txtEmail"
                      name="email"
                      type="email"
                      className="validate"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col s12 m6">
                  <div className="input-field">
                    <label htmlFor="txtPassword">Contraseña:</label>
                    <input
                      id="txtPassword"
                      name="password"
                      type="password"
                      className="validate"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col s12 m6">
                  <div className="input-field">
                    <label htmlFor="txtPassConfirm">Confirme Contraseña:</label>
                    <input
                      id="txtPassConfirm"
                      name="passConfirm"
                      type="password"
                      className="validate"
                      value={formData.passConfirm}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col s12 m12 contenedor-btn" style={{ marginTop: '20px' }}>
                  <button type="submit" className="btn waves-effect waves-light green">
                    Confirmar
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
};

export default RegistroUsuario;