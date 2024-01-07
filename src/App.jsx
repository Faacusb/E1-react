// import Categorias from "./components/Categorias/Categorias";
import Footer from "./components/Footer/Footer";
import { FooterContainer } from "./components/Footer/FooterStyles";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import CardsProductos from "./components/Productos/CardsProductos";
import { CardsContainer} from "./components/Productos/CardsProductosStyle";


function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        {/* <Categorias/> */}
        <CardsContainer>
          <CardsProductos/>
        </CardsContainer>
          
      

      </Layout>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </>
  );
}

export default App;
