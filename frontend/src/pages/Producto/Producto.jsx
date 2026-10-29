import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Producto = () => {
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  // Cargar datos desde localStorage al montar el componente
  useEffect(() => {
    const guardado = localStorage.getItem('productoActual');
    if (guardado) {
      try {
        setProducto(JSON.parse(guardado));
      } catch (error) {
        console.error("Error al cargar el producto: ", error);
      }
    }
  }, []);

  // Inicializar componentes interactivos de Materialize una vez que el producto esté cargado
  useEffect(() => {
    if (producto && typeof window !== 'undefined' && window.M) {
      const elemsColl = document.querySelectorAll('.collapsible');
      window.M.Collapsible.init(elemsColl, {});

      const elemsBox = document.querySelectorAll('.materialboxed');
      window.M.Materialbox.init(elemsBox, {});
    }
  }, [producto]);

  const guardarCarrito = () => {
    const cant = parseInt(cantidad, 10);

    if (!cant || cant <= 0) {
      if (window.M && window.M.toast) {
        window.M.toast({ html: "Por favor ingresa una cantidad válida" });
      } else {
        alert("Por favor ingresa una cantidad válida");
      }
      return;
    }

    if (!producto) return;

    const LLAVE = "carrito-pasteleria";
    let carrito = JSON.parse(localStorage.getItem(LLAVE)) || [];

    const existe = carrito.find(item => item.id === producto.id);
    if (existe) {
      existe.cantidad = (existe.cantidad || 1) + cant;
    } else {
      carrito.push({ ...producto, cantidad: cant });
    }

    localStorage.setItem(LLAVE, JSON.stringify(carrito));

    if (window.M && window.M.toast) {
      window.M.toast({ html: `¡Se agregaron ${cant} ${producto.titulo} al carrito!` });
    } else {
      alert(`¡Se agregaron ${cant} ${producto.titulo} al carrito!`);
    }
  };

  if (!producto) {
    return (
      <>
        <Navbar />
        <main>
          <div className="container" style={{ padding: '60px 0', textAlign: 'center' }}>
            <h4>Producto no encontrado</h4>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const ingredientesTexto = Array.isArray(producto.ingredientes)
    ? producto.ingredientes.join(', ')
    : producto.ingredientes || 'Sin información de ingredientes.';

  return (
    <>
      <Navbar />

      <main>
        <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
          <div className="row">
            {/* Imagen del producto */}
            <div className="col s12 m6">
              <img
                className="materialboxed responsive-img"
                width="650"
                src={producto.imagen}
                alt={producto.titulo}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'images/placeholder.webp';
                }}
              />
            </div>

            {/* Información del producto */}
            <div className="col s12 m6">
              <h3>{producto.titulo}</h3>
              <h5 className="precio" style={{ color: 'darkred', fontWeight: 'bold' }}>
                {producto.precio_formateado}
              </h5>

              {/* Input y Botón */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', margin: '20px 0' }}>
                <div style={{ width: '70px' }}>
                  <input
                    id="txtCant"
                    className="form-control"
                    type="number"
                    value={cantidad}
                    min="1"
                    onChange={(e) => setCantidad(e.target.value)}
                    style={{ textAlign: 'center', marginBottom: 0 }}
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="waves-effect waves-light btn"
                    style={{ backgroundColor: '#8B4513', textTransform: 'uppercase' }}
                    onClick={guardarCarrito}
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>

              {/* Acordeón Collapsible con pestaña activa por defecto */}
              <ul className="collapsible" style={{ marginTop: '25px' }}>
                <li className="active">
                  <div className="collapsible-header">
                    <i className="material-icons">filter_drama</i>Descripción
                  </div>
                  <div className="collapsible-body" style={{ display: 'block', backgroundColor: '#FFF5E1' }}>
                    <span>{producto.descripcion}</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">place</i>Ingredientes
                  </div>
                  <div className="collapsible-body" style={{ backgroundColor: '#FFF5E1' }}>
                    <span>{ingredientesTexto}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Producto;