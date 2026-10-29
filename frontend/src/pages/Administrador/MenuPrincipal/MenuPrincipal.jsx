import { Link } from "react-router-dom";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { useEffect, useState } from "react";
import styles from '../../Administrador/MenuPrincipal/MenuPrincipal.module.css';


function MenuAdmin() {

    const [cantProd, setCantProd] = useState(0);

    //para obtener cantidad de productos y mostrar en panel de admin
    useEffect(() => {
        const prodGuardados = JSON.parse(localStorage.getItem("inventario-productos")) || [];
        setCantProd(prodGuardados.length);
    }, []);


    return (
        <>
            <NavbarAdmin />
            <main className="container" style={{ marginTop: '30px', marginBottom: '50px' }}>
                <h3 className="header grey-text text-darken-3">Panel de Administración</h3>
                <p className="grey-text">Bienvenido al sistema de gestión de la pastelería.</p>

                <div className={`row ${styles.filaFlex}`} style={{ marginTop: '40px'}}>
                    <div className="col s12 m4" style={{marginBottom: '20px'}}>
                        <Link to="/admin/inventario" style={{ display: 'block', height: '100%'}}>
                            <div className={`card blue-grey darken-1 hoverable ${styles.tarjetaAdmin}`}>
                                <div className="card-content white-text center-align" style={{ padding: '30px 10px' }}>
                                    <i className="material-icons large">inventory_2</i>
                                    <span className="card-title" style={{ marginTop: '10px', fontWeight: 'bold' }}>Productos en Inventario</span>
                                    <h2 style={{ margin: '10px 0 0 0' }}>{cantProd}</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col s12 m4" style={{marginBottom: '20px'}}>
                        <Link to="/admin/usuarios" style={{ display: 'block', height: '100%' }}>
                            <div className={`card pink darken-1 hoverable ${styles.tarjetaAdmin}`}>
                                <div className="card-content white-text center-align" style={{ padding: '30px 10px' }}>
                                    <i className="material-icons large">group</i>
                                    <span className="card-title" style={{ marginTop: '10px', fontWeight: 'bold' }}>Clientes Registrados</span>
                                    <h2 style={{ margin: '10px 0 0 0' }}>12</h2>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div className="col s12 m4" style={{marginBottom: '20px'}}>
                        <Link to="/admin/boletas" style={{ display: 'block', height: '100%' }}>
                            <div className={`card teal darken-1 hoverable ${styles.tarjetaAdmin}`}>
                                <div className="card-content white-text center-align" style={{ padding: '30px 10px' }}>
                                    <i className="material-icons large">receipt_long</i>
                                    <span className="card-title" style={{ marginTop: '10px', fontWeight: 'bold' }}>Pedidos / Boletas</span>
                                    <h2 style={{ margin: '10px 0 0 0' }}>5</h2>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div className="col s12 m4" style={{marginBottom: '20px'}}>
                        <Link to="/admin/reportes" style={{ display: 'block', height: '100%' }}>
                            <div className={`card indigo darken-1 hoverable ${styles.tarjetaAdmin}`}>
                                <div className="card-content white-text center-align" style={{ padding: '30px 10px' }}>
                                    <i className="material-icons large">assessment</i>
                                    <span className="card-title" style={{ marginTop: '10px', fontWeight: 'bold' }}>Reportes Mensuales</span>
                                    <h2 style={{ margin: '10px 0 0 0' }}>45</h2>
                                </div>

                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MenuAdmin;