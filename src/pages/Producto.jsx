
import React from "react";

function Producto() {
    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <img id="detalle-img" class="materialboxed responsive-img" width="650" src="" alt="producto"/>
                        </div>
                        <div className="col s12 m6">
                            <h3 id="detalle-nombre"></h3>
                            <h5 id="detalle-precio" className="precio"></h5>
                        </div>
                        <div className="col s2 m1">
                            <input id="txtCant" className="form-control" type="number" placeholder="" value="1" min="1"/>
                        </div>
                        <div className="col s8 m4">
                            <a className="waves-effect waves-light btn" onclick="guardarCarrito()">Añadir al carrito</a>
                        </div>
                        <ul className="collapsible col s12 m6">
                            <li>
                                <div className="collapsible-header"><i className="material-icons">filter_drama</i>Descripción</div>
                                <div className="collapsible-body" ><span id="detalle-descripcion">Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">place</i>Ingredientes</div>
                                <div className="collapsible-body"><span id="detalle-ingredientes">Lorem ipsum dolor sit amet.</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Producto;