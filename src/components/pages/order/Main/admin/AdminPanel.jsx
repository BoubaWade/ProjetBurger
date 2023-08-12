import React, { useContext } from "react";
import { styled } from "styled-components";
import AdminContext from "../../../../../context/OrderContext";

export default function AdminPanel() {
  const {
    isAddTabSelected,
    setIsAddTabSelected,
    isEditTabSelected,
    setIsEditTabSelected,
  } = useContext(AdminContext);

  return (
    <AdminPanelStyled>
      {isAddTabSelected && <div>AdminPanel ADD</div>}
      {isEditTabSelected && <div>AdminPanel EDIT</div>}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  background-color: #ffffff;
  height: 250px;
  box-shadow: 0px -6px 8px -2px #0000001a;
  border-radius: 0px 0px 15px 15px;
`;
