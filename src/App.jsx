
import { Footer, FooterContainer } from "./components/Footer/FooterStyles";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layou  t/Layout";
import Navbar from "./components/Navbar/Navbar";
// import  SectionProductos from "./components/Productos"; //QUE ES ESTO???
import {CardsProductos} from "./components/Productos/CardsProductos";


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

//INTENTAPUSHEAR DE NUEVO A 

//MOSTRAME EL REPOSITORIO DE GIT 