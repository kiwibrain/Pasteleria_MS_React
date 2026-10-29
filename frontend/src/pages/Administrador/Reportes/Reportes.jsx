import { useState } from "react";
import NavbarAdmin from "../../../components/NavbarAdmin";

function Reportes() {
    return (
        <>
            <NavbarAdmin />
            <main className="container" style={{ marginTop: '30px', marginBottom: '50px' }}>
                <h3 className="header grey-text text-darken-3">Reportes del Mes</h3>

                <div className="row">
                    <div className="card-panel center-align">
                        <i className="material-icons large pink-text text-darken-1">trending_up</i>
                        <h5>Ingresos Totales</h5>
                        <h3 className="grey-text text-darken-3">$1.450.000</h3>
                        <p className="green-text">+12% respecto al mes anterior</p>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card-panel center-align">
                        <i className="material-icons large pink-text text-darken-1">cake</i>
                        <h5>Tortas Vendidas</h5>
                        <h3 className="grey-text text-darken-3">148</h3>
                        <p className="green-text">+5% respecto al mes anterior</p>
                    </div>
                </div>
                <div className="card" style={{padding: '20px'}}>
                    <h5>Productos Más Vendidos</h5>
                    <ul className="collection">
                        <li className="collection-item avatar">
                            <i className="material-icons circle pink darken-1">star</i>
                            <span className="title"><strong>Torta Tres Leches</strong></span>
                            <p>Categoría: Tortas <br/> 45 unidades vendidas</p>
                        </li>
                        <li className="collection-item avatar">
                            <i className="material-icons circle pink darken-1">star</i>
                            <span className="title"><strong>Kuchen de Nuez</strong></span>
                            <p>Categoría: Kuchenes <br/> 32 unidades vendidas</p>
                        </li>
                        <li className="collection-item avatar">
                            <i className="material-icons circle pink darken-1">star</i>
                            <span className="title"><strong>Cheesecake de Frambuesa</strong></span>
                            <p>Categoría: Postres <br/> 28 unidades vendidas</p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Reportes;