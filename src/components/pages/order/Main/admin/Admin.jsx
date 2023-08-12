import React, { useState } from "react";
import { styled } from "styled-components";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";

export default function Admin() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <AdminStyled>
      <AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
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
