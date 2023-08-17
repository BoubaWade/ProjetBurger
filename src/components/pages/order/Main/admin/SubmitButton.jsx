import { FiCheck } from "react-icons/fi";
import PrimaryButton from "../../../../reusableUI/PrimaryButton";
import { styled } from "styled-components";

export default function SubmitButton({ isSuccess }) {
  return (
    <SubmitButtonStyled>
      <PrimaryButton
        className={"primary-button"}
        label={"Ajouter un nouveau produit au menu"}
      />
      {isSuccess && (
        <div className="iconCheck-container">
          <FiCheck className="icon-check" />
          <span>Ajouté avec succès !</span>
        </div>
      )}
    </SubmitButtonStyled>
  );
}

const SubmitButtonStyled = styled.div`
  display: flex;
  column-gap: 5px;
  .primary-button {
    width: 50%;
    max-width: 275px;
    height: 35px;
    font-size: 13px;
    background-color: #60bd4f;
    &:hover {
      background-color: white;
      color: #60bd4f;
      border: 1px solid #60bd4f;
    }
  }
  .iconCheck-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Open Sans;
    font-size: 13px;
    color: #60bd4f;
    padding: 0 10px;
    .icon-check {
      border: 1px solid #60bd4f;
      border-radius: 50%;
    }
    span {
      margin-left: 5px;
    }
  }
`;
