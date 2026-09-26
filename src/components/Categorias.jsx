import React from 'react';

const categorias = [
  { img: '/images/torta_circular_vainilla.png', nombre: 'Tortas' },
  { img: '/images/Pan_Sin_Gluten.jpg', nombre: 'Sin Gluten' },
  { img: '/images/Galletas_Veganas_de_Avena.jpg', nombre: 'Vegano' },
];

const Categorias = () => {
  return (
    <div className="container">
      <h3 className="texto-main">Conoce nuestros productos</h3>
      <div className="row center-align">
        {categorias.map((cat, i) => (
          <div className="col s7 m4" key={i}>
            <div className="card">
              <div className="card-image">
                <img src={cat.img} alt={cat.nombre} />
              </div>
              <div className="card-content">
                <span className="card-title center-align text-categoria">
                  <a href="#">{cat.nombre}</a>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorias;