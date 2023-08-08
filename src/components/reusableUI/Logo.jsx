import styled from "styled-components";
//import logoOrange from "../assets/images/logo-orange.png";
import logoOrange from "../../../public/images/logo-orange.png";
import { theme } from "../../theme/indEx";
//import { Navigate } from "react-router-dom";

export default function Logo({onClick, className}) {
  
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>CRAZEE</h1>
      <img src={logoOrange} />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 75px;
  h1 {
    font-size: 100px;
    font-family: "Amatic SC", cursive;
    font-weight: 700;
    color: ${theme.colors.primary};
    margin: 0 15px
  }
  img {
    width: 200px;
    height: 150px;
  }
`;
