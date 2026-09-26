import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categorias from '../components/Categorias';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Slider />
        <Categorias />
      </main>
      <Footer />
    </>
  );
};

export default Index;