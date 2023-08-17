import { styled } from "styled-components";
import PrimaryButton from "../../../../reusableUI/PrimaryButton";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function EmptyMenuAdmin() {
  const { handleClickAddTab } = useContext(OrderContext);

  return (
    <EmptyMenuAdminStyled>
      <h1>Le menu est vide ?</h1>
      <h2>Cliquez ci-dessous pour le réinitialiser</h2>
      <PrimaryButton 
      label={"Générer de nouveaux produits"}
      className={"reset-button"}
      onClick={handleClickAddTab}
      />
    </EmptyMenuAdminStyled>
  );
}
const EmptyMenuAdminStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  color: #747b91;
  h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  h2 {
    font-weight: 400;
    margin-bottom: 30px;
  }
  .reset-button{
    width: 300px;
    height: 50px;
  }

`;
