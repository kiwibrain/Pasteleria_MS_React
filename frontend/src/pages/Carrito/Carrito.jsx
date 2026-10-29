import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  // Cargar productos del localStorage al montar el componente
  useEffect(() => {
    const LLAVE = "carrito-pasteleria";
    const carritoGuardado = JSON.parse(localStorage.getItem(LLAVE)) || [];
    setCarrito(carritoGuardado);
  }, []);

  // Función para guardar cambios tanto en estado como en localStorage
  const guardarEnLocalStorage = (nuevoCarrito) => {
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito-pasteleria", JSON.stringify(nuevoCarrito));
  };

  // Actualizar la cantidad de un producto
  const actualizarCantidad = (idProducto, nuevaCantidad) => {
    let cant = parseInt(nuevaCantidad, 10);
    if (isNaN(cant) || cant < 1) cant = 1;

    const nuevoCarrito = carrito.map((item) => {
      if (item.id === idProducto) {
        return { ...item, cantidad: cant };
      }
      return item;
    });

    guardarEnLocalStorage(nuevoCarrito);
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = (idProducto) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== idProducto);
    guardarEnLocalStorage(nuevoCarrito);

    if (window.M && window.M.toast) {
      window.M.toast({ html: 'Producto eliminado del carrito' });
    }
  };

  // Calcular el total
  const totalPagar = carrito.reduce((acumulador, item) => {
    const precio = Number(item.precio) || 0;
    const cantidad = Number(item.cantidad) || 1;
    return acumulador + precio * cantidad;
  }, 0);

  return (
    <>
      <Navbar />

      <main>
        <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
          <h4>Carrito de Compras</h4>

          <table className="highlight responsive-table" style={{ marginTop: '20px' }}>
            <thead>
              <tr>
                <th>Producto</th>
                <th style={{ textAlign: 'center' }}>Cantidad</th>
                <th style={{ textAlign: 'right' }}>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {carrito.length === 0 ? (
                <tr>
                  <td colSpan="3" className="center-align" style={{ padding: '30px 0' }}>
                    El carrito está vacío
                  </td>
                </tr>
              ) : (
                carrito.map((item) => {
                  const subtotal = (Number(item.precio) || 0) * (Number(item.cantidad) || 1);
                  return (
                    <tr key={item.id}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                          <img
                            src={item.imagen}
                            alt={item.titulo}
                            width="60"
                            height="60"
                            style={{ borderRadius: '5px', objectFit: 'cover' }}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'images/placeholder.webp';
                            }}
                          />
                          <b>{item.titulo}</b>
                        </div>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="number"
                          value={item.cantidad}
                          min="1"
                          className="form-control"
                          style={{ width: '70px', textAlign: 'center', margin: '0 auto' }}
                          onChange={(e) => actualizarCantidad(item.id, e.target.value)}
                        />
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '15px' }}>
                          <span>${subtotal.toLocaleString('es-CL')}</span>
                          <button
                            type="button"
                            onClick={() => eliminarDelCarrito(item.id)}
                            className="btn-flat red-text"
                            style={{ padding: 0, background: 'none', border: 'none', cursor: 'pointer' }}
                            title="Eliminar"
                          >
                            <i className="material-icons">delete</i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>

          {carrito.length > 0 && (
            <div style={{ marginTop: '30px', textAlign: 'right' }}>
              <h5>
                Total: <span style={{ fontWeight: 'bold', color: 'darkred' }}>${totalPagar.toLocaleString('es-CL')}</span>
              </h5>
              <button
                type="button"
                className="waves-effect waves-light btn"
                style={{ backgroundColor: '#8B4513', marginTop: '15px' }}
              >
                Pagar
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Carrito;