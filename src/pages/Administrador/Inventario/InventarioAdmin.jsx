import { useEffect, useState } from "react";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { productosIniciales } from '../../Productos/Productos';

function InventarioAdmin() {

    const [productos, setProductos] = useState(() => {
        const guardados = localStorage.getItem('inventario-productos');
        if (guardados) {
            try {
                return JSON.parse(guardados);
            } catch (e) {
                console.error("Error al leer storage", e);
            }
        }
        return productosIniciales;
    })

    useEffect(() => {
        localStorage.setItem('inventario-productos', JSON.stringify(productos));
        window.dispatchEvent(new Event('storage'));
    }, [productos]);

    const [modalOpen, setModalOpen] = useState(false);
    const [editarId, setEditarId] = useState(null);

    const [formData, setFormData] = useState({
        codigo: '',
        categoria: '',
        titulo: '',
        imagen: '',
        precio: '',
        descripcion: '',
        ingredientes: '',
        tiempo_preparacion: '',
        dificultad: 'Fácil',
        destacado: false
    });

    const handleCrear = () => {
        setEditarId(null);
        setFormData({
            codigo: '',
            categoria: '',
            titulo: '',
            imagen: 'images/',
            precio: '',
            descripcion: '',
            ingredientes: '',
            tiempo_preparacion: '',
            dificultad: 'Fácil',
            destacado: false
        });
        setModalOpen(true);
    }

    const handleEditar = (prod) => {
        setEditarId(prod.id);
        setFormData({
            codigo: prod.codigo,
            categoria: prod.categoria,
            titulo: prod.titulo,
            imagen: prod.imagen,
            precio: prod.precio,
            descripcion: prod.descripcion,
            ingredientes: Array.isArray(prod.ingredientes) ? prod.ingredientes.join(', ') : prod.ingredientes,
            tiempo_preparacion: prod.tiempo_preparacion,
            dificultad: prod.dificultad,
            destacado: prod.destacado
        });
        setModalOpen(true);
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const precioNum = Number(formData.precio);
        const precioFormateado = `$${precioNum.toLocaleString('es-CL')} CLP`;

        const ingredientesArray = typeof formData.ingredientes === 'string'
            ? formData.ingredientes.split(', ').map(i => i.trim()).filter(Boolean) : formData.ingredientes;

        if (editarId !== null) {
            setProductos(productos.map(p => p.id === editarId ? {
                ...p,
                ...formData,
                id: formData.codigo,
                precio: precioNum,
                precio_formateado: precioFormateado,
                ingredientes: ingredientesArray
            } : p));
        } else {
            const nuevoProducto = {
                id: formData.codigo || `PROD-${Date.now()}`,
                ...formData,
                id: formData.codigo,
                precio: precioNum,
                precio_formateado: precioFormateado,
                ingredientes: ingredientesArray
            };
            setProductos([...productos, nuevoProducto])
        }

        setModalOpen(false);
    };

    const handleEliminar = (id) => {
        if (window.confirm("¿Estás seguro de eliminar este producto del inventario?")) {
            setProductos(productos.filter(p => p.id !== id));
        }
    };

    return (
        <>
            <NavbarAdmin />
            <main className="container" style={{ marginTop: '30px', marginBottom: '50px' }}>
                <div className="row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div>
                        <h3 className="header grey-text text-darken-3">Panel de Inventario</h3>
                    </div>
                    <div>
                        <button
                            onClick={handleCrear}
                            className="waves-effect waves-light btn pink darken-1"
                        >
                            <i className="material-icons left">add</i> Agregar Producto
                        </button>
                    </div>
                </div>

                <div className="card" style={{ padding: '20px', overflowX: 'auto' }}>
                    <table className="striped highlight" style= {{width: '100%', tableLayout: 'fixed'}}>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Imagen</th>
                                <th>Título</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                                <th>Destacado</th>
                                <th className="center-align">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((prod) => (
                                <tr key={prod.id}>
                                    <td>{prod.codigo}</td>
                                    <td>
                                        <img
                                            src={prod.imagen}
                                            alt=""
                                            style={{
                                                width: '45px', height: '45px',
                                                minWidth: '45px', minHeight: '45px',
                                                objectFit: 'cover', borderRadius: '4px',
                                                backgroundColor: '#e0e0e0', display: 'block',
                                                border: 'none', outline: 'none'
                                            }}
                                            onError={(e) => {
                                                const fallback = 'https://via.placeholder.com/45?text=Sin+Foto';
                                                if (e.target !== fallback){
                                                    e.target.src = fallback;
                                                }
                                            }}
                                        />
                                    
                                    </td>
                                    <td><strong>{prod.titulo}</strong></td>
                                    <td>{prod.categoria}</td>
                                    <td>{prod.precio_formateado}</td>
                                    <td>
                                        {prod.destacado ? (
                                            <span className="new badge green" data-badge-caption="Sí" style={{ float: 'none', marginLeft: 0 }}></span>
                                        ) : (
                                            <span className="grey-text">No</span>
                                        )}
                                    </td>
                                    <td className="center-align">
                                        <button
                                            onClick={() => handleEditar(prod)}
                                            className="waves-effect waves-light btn-small indigo darken-1"
                                            style={{ marginRight: '8px' }}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => handleEliminar(prod.id)}
                                            className="waves-effect waves-light btn-small red darken-1"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {productos.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="center-align grey-text">No hay productos registrados en el inventario.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {modalOpen && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                        overflowY: 'auto',
                        padding: '20px'
                    }}>
                        <div className="card" style={{ width: '100%', maxWidth: '700px', padding: '30px', maxHeight: '90vh', overflowY: 'auto' }}>
                            <h4 className="pink-text text-darken-1" style={{ marginTop: 0 }}>
                                {editarId !== null ? 'Editar Producto' : 'Agregar Nuevo Producto'}
                            </h4>

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="input-field col s12 m6">
                                        <input
                                            id="codigo"
                                            type="text"
                                            name="codigo"
                                            value={formData.codigo}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="codigo" className="active">Código</label>
                                    </div>
                                    <div className="input-field col s12 m6">
                                        <input
                                            id="categoria"
                                            type="text"
                                            name="categoria"
                                            value={formData.categoria}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="categoria" className="active">Categoría</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                            id="titulo"
                                            type="text"
                                            name="titulo"
                                            value={formData.titulo}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="titulo" className="active">Título del Producto</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12 m6">
                                        <input
                                            id="precio"
                                            type="number"
                                            name="precio"
                                            value={formData.precio}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="precio" className="active">Precio (Ej: 45000)</label>
                                    </div>
                                    <div className="input-field col s12 m6">
                                        <input
                                            id="imagen"
                                            type="text"
                                            name="imagen"
                                            value={formData.imagen}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="imagen" className="active">Ruta de Imagen (Ej: images/torta.jpg)</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea
                                            id="descripcion"
                                            name="descripcion"
                                            value={formData.descripcion}
                                            onChange={handleChange}
                                            className="materialize-textarea"
                                            rows="2"
                                        ></textarea>
                                        <label htmlFor="descripcion" className="active">Descripción</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                            id="ingredientes"
                                            type="text"
                                            name="ingredientes"
                                            value={formData.ingredientes}
                                            onChange={handleChange}
                                            placeholder="Harina, Azúcar, Huevos..."
                                        />
                                        <label htmlFor="ingredientes" className="active">Ingredientes (separados por comas)</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12 m6">
                                        <input
                                            id="tiempo_preparacion"
                                            type="text"
                                            name="tiempo_preparacion"
                                            value={formData.tiempo_preparacion}
                                            onChange={handleChange}
                                            placeholder="60 min"
                                        />
                                        <label htmlFor="tiempo_preparacion" className="active">Tiempo de Preparación</label>
                                    </div>
                                    <div className="col s12 m6" style={{ marginTop: '15px' }}>
                                        <label className="active" style={{ fontSize: '1rem' }}>Dificultad</label>
                                        <select
                                            name="dificultad"
                                            value={formData.dificultad}
                                            onChange={handleChange}
                                            className="browser-default"
                                            style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #9e9e9e' }}
                                        >
                                            <option value="Fácil">Fácil</option>
                                            <option value="Media">Media</option>
                                            <option value="Alta">Alta</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row" style={{ marginTop: '15px' }}>
                                    <div className="col s12">
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="destacado"
                                                checked={formData.destacado}
                                                onChange={handleChange}
                                            />
                                            <span style={{ fontSize: '1rem', color: '#333' }}>Producto Destacado</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="row right-align" style={{ marginTop: '20px', marginBottom: 0 }}>
                                    <button
                                        type="button"
                                        onClick={() => setModalOpen(false)}
                                        className="waves-effect waves-light btn grey lighten-1 black-text"
                                        style={{ marginRight: '10px' }}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        className="waves-effect waves-light btn pink darken-1"
                                    >
                                        {editarId !== null ? 'Guardar Cambios' : 'Crear Producto'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
};

export default InventarioAdmin;