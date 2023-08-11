import Logo from "../../../reusableUI/Logo.jsx";
import { styled } from "styled-components";
import { theme } from "../../../../theme/indEx.jsx";
import NavBarRightSide from "./NavBarRightSide.jsx";

export default function NavBar() {
  return (
    <NavBarStyled>
      <Logo className={"logo"} onClick={() => window.location.reload()} />
      <NavBarRightSide />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  background-color: ${theme.colors.background_white};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
  max-width: 1400px;
  height: 100px;
  padding: 0 70px 0 15px;
  border-radius: 15px 15px 0px 0px;
  .logo {
    margin-bottom: 0;
    cursor: pointer;
    h1 {
      font-size: 36px;
      margin: 0 5px;
    }
    img {
      width: 80px;
      height: 60px;
    }
  }
`;
