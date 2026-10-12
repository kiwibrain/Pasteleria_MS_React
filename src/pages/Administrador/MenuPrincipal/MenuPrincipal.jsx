import { Link } from "react-router-dom";
import NavbarAdmin from "../../../components/NavbarAdmin";

function MenuAdmin() {
    return (
        <>
            <NavbarAdmin />
            <main className="container" style={{ marginTop: '30px', marginBottom: '50px' }}>
                <h3 className="header grey-text text-darken-3">Panel de Administración</h3>
                <p className="grey-text">Bienvenido al sistema de gestión de la pastelería.</p>

                <div className="row" style={{ marginTop: '40px' }}>
                    <div className="col s12 m4">
                        <Link to="/admin/inventario"></Link>
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Ventas del Día</span>
                                <h2>$125.000</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card pink darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Pedidos Pendientes</span>
                                <h2>12</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card teal darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Nuevos Clientes</span>
                                <h2>5</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MenuAdmin;