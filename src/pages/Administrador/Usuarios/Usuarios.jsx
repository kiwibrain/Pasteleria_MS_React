import { useState } from "react";
import NavbarAdmin from "../../../components/NavbarAdmin";

function Usuarios() {
    // Datos de prueba actualizados con nombres, apellidos, edad y email
    const [usuarios] = useState([
        { 
            id: 1, 
            nombres: "María Fernanda", 
            apellidos: "González Pérez", 
            edad: 28, 
            email: "maria@correo.com", 
            estado: "Activo" 
        },
        { 
            id: 2, 
            nombres: "Pedro Pablo", 
            apellidos: "Silva Rojas", 
            edad: 35, 
            email: "pedro@correo.com", 
            estado: "Activo" 
        },
        { 
            id: 3, 
            nombres: "Camila Andrea", 
            apellidos: "Rojas Soto", 
            edad: 22, 
            email: "camila@correo.com", 
            estado: "Inactivo" 
        },
        { 
            id: 4, 
            nombres: "Luis", 
            apellidos: "Méndez", 
            edad: 41, 
            email: "luis.m@correo.com", 
            estado: "Activo" 
        }
    ]);

    return (
        <>
            <NavbarAdmin />
            <main className="container" style={{ marginTop: '30px', marginBottom: '50px' }}>
                <h3 className="header grey-text text-darken-3">Gestión de Usuarios</h3>

                <div className="card" style={{ padding: '20px', marginTop: '20px' }}>
                    <table className="striped highlight responsive-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre(s)</th>
                                <th>Apellido(s)</th>
                                <th>Edad</th>
                                <th>Email</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((user) => (
                                <tr key={user.id}>
                                    <td>#{user.id}</td>
                                    <td><strong>{user.nombres}</strong></td>
                                    <td>{user.apellidos}</td>
                                    <td>{user.edad}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <span className={`new badge ${user.estado === 'Activo' ? 'green' : 'grey'}`} data-badge-caption="">
                                            {user.estado}
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

export default Usuarios;