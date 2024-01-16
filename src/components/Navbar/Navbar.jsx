import {
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
  UserContainerStyled,
  SpanStyled,
  HomeContainerStyled,
  Burguer
} from "./NavbarStyles";

import EclipsunLogo from "../img/EclipsunLogo-unscreen.gif";
import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <div>
      <NavbarContainerStyled>
        <div>
          <a href="#">
            <img src={EclipsunLogo} alt="Logo" />
          </a>
        </div>
        <LinksContainerStyled>
          <HomeContainerStyled>
            <a href="#">
              <LinkContainerStyled>
                <HiHome />
                {/* icono */}
              </LinkContainerStyled>
              Home
            </a>
            <a href="#">
              Productos
            </a>
          </HomeContainerStyled>

          <UserNavStyled>
            <UserContainerStyled>
              <SpanStyled>
                {/* Iniciar Sesión */}
              </SpanStyled>
              <FaUserAlt/>
            </UserContainerStyled>
          </UserNavStyled>
            <Burguer>
              <FontAwesomeIcon icon={faBars}/>
            </Burguer>
        </LinksContainerStyled>
      </NavbarContainerStyled>
    </div>
  );
}

export default Navbar;
