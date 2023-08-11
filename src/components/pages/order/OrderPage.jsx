import { styled } from "styled-components";
import Main from "./Main/Main.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import { theme } from "../../../theme/indEx";
import AdminContext from "../../../context/AdminContext.jsx";
import { useState } from "react";

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  
  const adminContextValue = { isAdmin, setIsAdmin };

  return (
    <AdminContext.Provider value={adminContextValue}>
      <OrderPageStyled>
        <NavBar />
        <Main />
      </OrderPageStyled>
    </AdminContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  height: 100vh;
  background-color: ${theme.colors.primary};
  padding: 20px 0;
`;
