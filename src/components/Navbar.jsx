import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const Navbar = () => {

  const [elementoUsuario, setElementoUsuario] = useState( JSON.parse(localStorage.getItem("UsuarioActivo")).nombre || "");

  function cerrarSesion(){
    localStorage.setItem("UsuarioActivo", JSON.stringify(""));
    setElementoUsuario("");
  }

  useEffect(() => {
    const sidenav = document.querySelectorAll(".sidenav");
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
                <li><a href="/nosotros">Nosotros</a></li>
                <li><a href="/contacto">Contacto</a></li>
              </ul>

              <ul className="right hide-on-med-and-down">
                <li><Link to="/carrito">Carrito</Link></li>
                <li hidden={ elementoUsuario!=="" }><Link to="/inicio-sesion">Iniciar Sesión</Link></li>
                <li hidden={ elementoUsuario!=="" }><Link to="/registro">Registrarse</Link></li>
                <li hidden={ elementoUsuario==="" }>--Aqui deberia ir nombre usuario--</li>
                <li hidden={ elementoUsuario==="" }> <button className="btn btn-info" onClick={cerrarSesion}>Cerrar Sesion</button> </li>
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
        <li><a href="/nosotros">Nosotros</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><Link to="/carrito">Carrito</Link></li>
        <li><Link to="/inicio-sesion">Iniciar Sesión</Link></li>
        <li><Link to="/registro">Registrarse</Link></li>
      </ul>
    </>
  );
};

export default Navbar;