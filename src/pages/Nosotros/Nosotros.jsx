import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Nosotros() {
    return (
        <>
            <Navbar />
            <main>
                <div className='container' style={{ paddingTop: '40px', paddingBottom: '60px' }}>
                    <h3 className='texto-main' style={{marginBottom: '20px', fontWeight:'bold'}}>Nosotros</h3>
                    <div className='row' style={{display: 'flex', alignItems:'center', flexWrap:'wrap'}}>
                        <div className='col s12 m5'>
                            <img src="public/images/pasteleria.jpg" alt="" 
                            className='responsive-img' style={{borderRadius:'8px', boxShadow:'0 4px 8px rgba(0,0,0,0.1)'}}/>
                        </div>

                        <div className='col s12 m7'>
                            <p>
                                Nuestra encantadora Pastelería Mil Sabores celebra su 50 aniversario como un referente en la repostería chilena. Es famosa principalmente por su participación en un récord Guinness en 1995, 
                                en la cual colaboró en la creación de la torta más grande del mundo.
                            </p>
                            <h4 style={{fontSize:'1.8rem', fontWeight:'bold'}}>Nuestra Misión</h4>
                            <p>
                                Ofrecer una experiencia dulce y memorable a nuestros clientes, 
                                proporcionando tortas y productos de repostería de alta calidad para todas las ocasiones, 
                                mientras celebramos nuestras raíces históricas y fomentamos la creatividad en la repostería.
                            </p>
                            <h4 style={{fontSize:'1.8rem', fontWeight:'bold'}}>Nuestra Visión</h4>
                            <p>
                                Convertirnos en la tienda online líder de productos de repostería en Chile, 
                                conocida por nuestra innovación, calidad y el impacto positivo en la comunidad, 
                                especialmente en la formación de nuevos talentos en gastronomía.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Nosotros;
