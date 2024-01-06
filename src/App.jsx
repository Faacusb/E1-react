// import Categorias from "./components/Categorias/Categorias";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import CardsProductos from "./components/Productos/CardsProductos"
import { CardsContainer } from "./components/Productos/CardsProductosStyle";

function App() {


  return (
    <>
      <Navbar/>
      <Layout>
          <Hero/>
          {/* <Categorias/> */}
          <CardsContainer>
            <h2>Nuestas gafas</h2>
          <CardsProductos/>

          </CardsContainer>
      </Layout>
      <Footer/>
    </>
  )
}

export default App
