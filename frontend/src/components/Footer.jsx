
import React from "react";

function Footer() {
    return (
        <>
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <div className="footer-logo"><img src="images/pasteleria_logo_transparent.png" alt="logo"/></div>
                            <p className="grey-text text-lighten-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                                odit eligendi cupiditate numquam ipsa.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Informaciones</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Terminos de Servicio</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Politicas de Reembolso</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Contacto</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Whatsapp</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2026 Pasteleria Mil Sabores
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;