import { useState } from "react";
import NavbarAdmin from "../../../components/NavbarAdmin";

function Reportes() {
    const [reportes] = useState([
        { 
            id: "BOL-01", 
            cliente: "María González", 
            datetime: "2023-03-25 14:33", 
            total: 28, 
            estado: "maria@correo.com"  
        },
        { 
            id: "BOL-02", 
            cliente: "Pedro Silva", 
            datetime: "Silva Rojas", 
            total: 35, 
            estado: "pedro@correo.com"
        },
        { 
            id: "BOL-03", 
            cliente: "Camila Rojas", 
            datetime: "Rojas Soto", 
            total: 22, 
            estado: "camila@correo.com"
        },
        { 
            id: "BOL-04", 
            cliente: "Luis Méndez", 
            datetime: "Méndez", 
            total: 41, 
            estado: "luis.m@correo.com"
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
                            {reportes.map((receipt) => (
                                <tr key={receipt.id}>
                                    <td>#{receipt.id}</td>
                                    <td><strong>{receipt.cliente}</strong></td>
                                    <td>{receipt.datetime}</td>
                                    <td>{receipt.total}</td>
                                    <td>{receipt.estado}</td>
                                    <td>
                                        <span className={`new badge ${receipt.estado === 'Activo' ? 'green' : 'grey'}`} data-badge-caption="">
                                            {receipt.estado}
                                        </span>
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

export default Reportes;