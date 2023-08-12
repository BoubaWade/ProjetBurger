import { useContext} from "react";
import ToggleButton from "../../../reusableUI/ToggleButton";
import { styled } from "styled-components";
import { toast } from "react-toastify";
import Profil from "./Profil";
import OrderContext from "../../../../context/OrderContext";

export default function NavBarRightSide() {
  const { isAdmin, setIsAdmin } = useContext(OrderContext);

  const displayToastAdmin = () => {
    if (!isAdmin) notify();
    setIsAdmin(!isAdmin);
  };
  const notify = () => {
    toast.info("Mode admin activé");
  };
  return (
    <NavBarRightSideStyled>
      <ToggleButton
        onToggle={displayToastAdmin}
        labelIfChecked={"DÉSACTIVER LE MODE ADMIN"}
        labelIfUnchecked={"ACTIVER LE MODE ADMIN"}
      />
      <Profil />
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
  align-items: center;
  font-family: "Open Sans", sans-serif;
`;
