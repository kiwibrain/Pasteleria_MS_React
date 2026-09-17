function Navbar(){
    return(
    <>
        <header className="header">
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li>
                            <div className="logo"><img src="images/pasteleria_logo_transparent.png" alt="Logo"/></div>
                        </li>
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="productos.html">Productos</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="carrito.html">Carrito</a></li>
                        <li><a href="inicioSesion.html">Iniciar Sesión</a></li>
                        <li><a href="registroUsuario.html">Registrarse</a></li>
                        <li>
                            <form className="form-search">
                                <div className="input-field">

                                    <input id="search" type="search" required/>
                                    <label className="label-icon" for="search"><i
                                            className="medium material-icons left">search</i></label>
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
        <li><a href="index.html">Inicio</a></li>
        <li><a href="productos.html">Productos</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="carrito.html">Carrito</a></li>
    </ul>
    </>
    )
}

export default Navbar