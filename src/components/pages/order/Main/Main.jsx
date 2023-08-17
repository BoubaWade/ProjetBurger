import { styled } from "styled-components";
import Menu from "./menu/Menu";
import Admin from "./admin/Admin";
import { useContext } from "react";
import AdminContext from "../../../../context/OrderContext";

export default function Main() {
  const { isAdmin } = useContext(AdminContext);

  return (
    <MainStyled>
      <div>Basket</div>
      <div className="menu-admin">
        <Menu />
        {isAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}
const MainStyled = styled.div`
  width: 95vw;
  max-width: 1400px;
  height: calc(100% - 100px);
  background-color: #f5f5f7;
  margin: 0 auto;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  overflow-y: scroll;
  //.menu-admin {
  //  position: relative;
  //  overflow: hidden;
  //}
`;
