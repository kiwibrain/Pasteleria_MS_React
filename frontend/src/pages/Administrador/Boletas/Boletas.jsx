import { useState } from "react";
import NavbarAdmin from "../../../components/NavbarAdmin";

function Boletas() {
    const [boletas] = useState([
        { 
            id: "BOL-01", 
            cliente: "María González", 
            datetime: "2026-03-25 14:33", 
            total: "$45.000", 
            estado: "Completado"  
        },
        { 
            id: "BOL-02", 
            cliente: "Pedro Silva", 
            datetime: "2026-03-26 11:12", 
            total: "$104.990", 
            estado: "Pendiente"
        },
        { 
            id: "BOL-03", 
            cliente: "Camila Rojas", 
            datetime: "2026-03-26 16:55", 
            total: "$20.550", 
            estado: "Pendiente"
        },
        { 
            id: "BOL-04", 
            cliente: "Luis Méndez", 
            datetime: "2026-03-27 10:00", 
            total: "$66.990", 
            estado: "Completado"
        }
    ]);

    return (
        <>
            <NavbarAdmin />
            <main className="container" style={{ marginTop: '30px', marginBottom: '50px' }}>
                <h3 className="header grey-text text-darken-3">Reportes del mes</h3>

                <div className="card" style={{ padding: '20px', marginTop: '20px' }}>
                    <table className="striped highlight responsive-table">
                        <thead>
                            <tr>
                                <th>N° Boleta</th>
                                <th>Cliente</th>
                                <th>Fecha y hora</th>
                                <th>Total</th>
                                <th>Estado</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {boletas.map((receipt) => (
                                <tr key={receipt.id}>
                                    <td>#{receipt.id}</td>
                                    <td><strong>{receipt.cliente}</strong></td>
                                    <td>{receipt.datetime}</td>
                                    <td>{receipt.total}</td>
                                    <td>{receipt.estado}</td>
                                    <td>
                                        <span className={`new badge ${receipt.estado === 'Completado' ? 'green' : receipt.estado === 'Pendiente' ? 'orange': 'red'}`} data-badge-caption="">
                                            {receipt.estado}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn-small blue-grey darken-1 waves-effect waves-light">
                                            <i className="material-icons">visibility</i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default Boletas;