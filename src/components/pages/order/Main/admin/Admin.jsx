import React, { useContext} from "react";
import { styled } from "styled-components";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";
import OrderContext from "../../../../../context/OrderContext";

export default function Admin() {
  const { isCollapsed, setIsCollapsed } = useContext(OrderContext);
  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  width: 95vw;
  max-width: 1400px;
  position: absolute;
  right: 2.5vw;
  bottom: 20px;
  //left:0;
  //right: 0;
  //bottom: 0;
`;
