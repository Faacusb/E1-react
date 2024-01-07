import { CardsContainer, CardsProductoss } from "./CardsProductosStyle";
import Anteojo1 from "../img/pablo-soriano-Hnp-cs9QVOc-unsplash.jpg"
import Anteojo2 from "../img/alonso-reyes-GPKAUth4VfA-unsplash.jpg"
import Anteojo3 from "../img/sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg"
import Anteojo4 from "../img/oladimeji-odunsi-Wu3yqve2gnc-unsplash.jpg"

function CardsProductos() {
  return (
    <CardsContainer>

      <CardsProductoss>
        <img src={Anteojo1} alt="" />
        <h2>Anteojos Ohana</h2>
        <span>$13.000</span>
      </CardsProductoss>

      <CardsProductoss>
        <img src={Anteojo2} alt="" />
        <h2>Anteojos Preety</h2>
        <span>$15.000</span>
      </CardsProductoss>

      <CardsProductoss>
        <img src={Anteojo3} alt="" />
        <h2>Anteojos Devil</h2>
        <span>$18.000</span>
      </CardsProductoss>

      <CardsProductoss>
        <img src={Anteojo4} alt="" />
        <h2>Anteojos Triangle</h2>
        <span>$20.000</span>
      </CardsProductoss>
    </CardsContainer>
  )
}

export default CardsProductos;
