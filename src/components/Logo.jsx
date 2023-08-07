import styled from "styled-components";
import logoOrange from "../assets/images/logo-orange.png";
import { theme } from "../theme/indEx";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>
        CRAZEE
        <img src={logoOrange}/>
        BURGER
      </h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
h1{
    font-size: 110px;
    font-family: 'Amatic SC', cursive;
    font-weight: 700;
    color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 75px;
      img {
      width: 200px;
      height: 150px;
    }
}
`;
