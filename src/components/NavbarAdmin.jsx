import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";

const NavbarAdmin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sidenavElems = document.querySelectorAll(".sidenav");
    const sidenavInstances = M.Sidenav.init(sidenavElems);

    const dropdownElems = document.querySelectorAll(".dropdown-trigger");
    const dropdownInstances = M.Sidenav.init(dropdownElems, {coverTrigger: false});

    return () => {
      sidenavInstances.forEach((instance) => instance.destroy());
      dropdownInstances.forEach((instance) => instance.destroy());
    };
  }, []);

  //cerrar sesion de admin
  const handleCerrarSesion = (e) => {
    e.preventDefault();
    localStorage.removeItem("UsuarioActivo");
    navigate("/");
  };

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
              <ul className="right hide-on-med-and-down">
                <li><a href="#">Reportes</a></li>
                <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Administrador<i className="material-icons right">arrow_drop_down</i></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <ul id="dropdown1" className="dropdown-content">
        <li><a href="#!">Perfil</a></li>
        <li><a href="#!" onClick={handleCerrarSesion}>Cerrar Sesión</a></li>
      </ul>

      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/admin">Menú</Link></li>
        <li><Link to="/admin/inventario">Inventario</Link></li>
        <li><a href="#">Usuarios</a></li>
        <li><a href="#">Boletas</a></li>
        <li className="divider"></li>
        <li><Link to="/carrito">Perfil</Link></li>
        <li><Link to="/inicio-sesion">Cerrar Sesión</Link></li>
      </ul>
    </>
  );
};

export default NavbarAdmin;