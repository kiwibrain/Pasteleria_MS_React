import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

const Slider = () => {
  useEffect(() => {
    const sliders = document.querySelectorAll('.slider');
    M.Slider.init(sliders, {
      indicators: true,
      height: 500,
      transition: 500,
      interval: 6000,
    });
  }, []);

  return (
    <div className="slider">
      <ul className="slides">
        <li>
          <img src="/images/torta_1.webp" alt="torta" />
          <div className="caption left-align">
            <h3 className="texto-slide">¡Celebrando 50 años!</h3>
            <h5 className="texto-slide">¡Obten un 10% de descuento!</h5>
          </div>
        </li>
        <li>
          <img src="/images/torta_mocca.webp" alt="torta_mocca" />
          <div className="caption center-align">
            <h3 className="texto-slide">¡Explora nuestros productos!</h3>
            <h5 className="texto-slide">Tenemos repostería para todo tipo de gustos.</h5>
            <Link to="/productos" className="waves-effect waves-light btn-large boton-slide">
              Ver más
            </Link>
          </div>
        </li>
        <li>
          <img src="/images/torta_tres_leches.jpg" alt="torta3" />
          <div className="caption right-align">
            <h3 className="texto-slide">¡Cotiza con nosotros!</h3>
            <h5 className="texto-slide">Órdenes personalizadas especialmente para el cliente.</h5>
            <a className="waves-effect waves-light btn-large boton-slide">Contacto</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Slider;