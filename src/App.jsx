// import Categorias from "./components/Categorias/Categorias";
// import Footer from "./components/Footer/Footer";
import { Footer, FooterContainer } from "./components/Footer/FooterStyles";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import CardsProductos from "./components/Productos/CardsProductos";
import  SectionProductos from "./components/Productos/CardsProductosStyle";


function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        {/* <Categorias/> */}
        <SectionProductos>
        {/* <CardsContainer> */}
        <h1>Nuestros Productos.</h1>
          <CardsProductos/>
        </SectionProductos>
        {/* </CardsContainer> */}
          
      

      </Layout>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </>
  );
}

export default App;
