import { styled } from "styled-components";
import Main from "./Main";
import NavBar from "./NavBar";
import { theme } from "../../../theme/indEx";

export default function OrderPage() { 
  return (
    <OrderPageStyled>
      <NavBar />
      <Main/>  
    </OrderPageStyled>
  )
}

const  OrderPageStyled= styled.div`
height: 100vh;
background-color: ${theme.colors.primary};
padding: 20px 0;  
`;