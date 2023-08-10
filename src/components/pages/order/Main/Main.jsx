import { styled } from "styled-components";
import Menu from "./Menu";
import PanelAdmin from "./PanelAdmin";

export default function Main() {
  return (
    <MainStyled>
      <div>Basket</div>
      <Menu />
      <PanelAdmin />
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
`;
