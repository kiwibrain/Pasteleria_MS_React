import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const NavbarAdmin = () => {
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
                <li><Link to="/admin">Menú</Link></li>
                <li><Link to="/admin/inventario">Inventario</Link></li>
                <li><a href="#">Usuarios</a></li>
                <li><a href="#">Boletas</a></li>
              </ul>

                <ul id="dropdown1" class="dropdown-content">
                  <li><a href="#!">Perfil</a></li>
                  <li><a href="#!">Cerrar Sesión</a></li>
                </ul>
                <nav>
                  <div class="nav-wrapper">
                    <a href="#!" class="brand-logo">Logo</a>
                    <ul class="right hide-on-med-and-down">
                      <li><a href="#">Reportes</a></li>
                      <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">*poner nombre admin aqui*<i class="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
                  </div>
                </nav>

            </div>
          </nav>
        </div>
      </header>

      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/admin">Menú</Link></li>
        <li><Link to="/admin/inventario">Inventario</Link></li>
        <li><a href="#">Usuarios</a></li>
        <li><a href="#">Boletas</a></li>
        <li class="divider"></li>
        <li><Link to="/carrito">Perfil</Link></li>
        <li><Link to="/inicio-sesion">Cerrar Sesión</Link></li>
      </ul>
    </>
  );
};

export default NavbarAdmin;