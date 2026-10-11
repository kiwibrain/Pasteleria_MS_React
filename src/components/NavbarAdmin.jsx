import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";

const NavbarAdmin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sidenavElems = document.querySelectorAll(".sidenav");
    const sidenavInstances = M.Sidenav.init(sidenavElems);

    return () => {
      sidenavInstances.forEach((instance) => instance.destroy());
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
                <li>
                  <span style={{padding: "0 15px", fontWeight: "bold"}}>Administrador</span>
                </li>
                <li>
                  <button onClick={handleCerrarSesion} className="btn waves-effect waves-light red darken-2" style={{marginRight: "15px"}}>
                    Cerrar Sesión
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/admin">Menú</Link></li>
        <li><Link to="/admin/inventario">Inventario</Link></li>
        <li><a href="#!">Usuarios</a></li>
        <li><a href="#!">Boletas</a></li>
        <li className="divider"></li>
        <li><a href="#!" onClick={handleCerrarSesion}>Cerrar Sesión</a></li>
      </ul>
    </>
  );
};

export default NavbarAdmin;