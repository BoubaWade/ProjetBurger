import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ToggleButton from "../../../reusableUI/ToggleButton";
import { styled } from "styled-components";
import { toast } from "react-toastify";
import Profil from "./Profil";

export default function NavBarRightSide() {
  const [isAdmin, setIsAdmin] = useState(false);

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
