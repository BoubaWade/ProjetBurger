import { styled } from "styled-components";
import Main from "./Main/Main.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import { theme } from "../../../theme/indEx";
import AdminContext from "../../../context/AdminContext.jsx";
import { useState } from "react";

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAddTabSelected, setIsAddTabSelected] = useState(true);
  const [isEditTabSelected, setIsEditTabSelected] = useState(false);

  const adminContextValue = {
    isAdmin,
    setIsAdmin,
    isAddTabSelected,
    setIsAddTabSelected,
    isEditTabSelected,
    setIsEditTabSelected,
  };

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
