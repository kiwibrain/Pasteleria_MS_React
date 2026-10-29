import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Slider from "../../components/Slider.jsx";
import Categorias from "../../components/Categorias.jsx";
import Footer from "../../components/Footer.jsx";

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