import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

const Navbar = () => {
  useEffect(() => {
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  }, []);

  return (
    <>
      <header className="header">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>

              <ul className="left hide-on-med-and-down">
                <li>
                  <div className="logo">
                    <img src="/images/pasteleria_logo_transparent.png" alt="Logo" />
                  </div>
                </li>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>

              <ul className="right hide-on-med-and-down">
                <li><Link to="/carrito">Carrito</Link></li>
                <li><Link to="/inicioSesion">Iniciar Sesión</Link></li>
                <li><Link to="/registroUsuario">Registrarse</Link></li>
                <li>
                  <form className="form-search">
                    <div className="input-field">
                      <input id="search" type="search" required />
                      <label className="label-icon" htmlFor="search">
                        <i className="medium material-icons left">search</i>
                      </label>
                      <i className="material-icons">close</i>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
        <li><Link to="/carrito">Carrito</Link></li>
      </ul>
    </>
  );
};

export default Navbar;