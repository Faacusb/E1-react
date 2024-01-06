import Boton from "../UI/Boton"
import { HeroContainerStyled, HeroTextContainerStyled, HeroImageContainerStyled } from "./HeroStyles"
import Eclipsun from "../img/Eclipsun.jpg"

function Hero() {
  return (
    <HeroContainerStyled>
      <HeroTextContainerStyled>
        <h1>Eclipsun.</h1>
        <h2>Encuentra tu estilo bajo el sol.</h2>
        <p>Busca lo que quieras.</p>
      </HeroTextContainerStyled>

      <HeroImageContainerStyled>
        <img src={Eclipsun} alt="Logo" />
      </HeroImageContainerStyled>
    </HeroContainerStyled>
    
    
    )
}

export default Hero