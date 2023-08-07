import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/indEx";
import { RiArrowRightSLine } from "react-icons/Ri";
import TextInput from "../../reusableUI/TextInput";
import { BsPersonCircle } from "react-icons/Bs";
import PrimaryButton from "../../reusableUI/PrimaryButton";

function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };
  return (
    <LoginFormStyled onSubmit={onSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <span></span>
      <TextInput
        value={inputValue}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        Icon={<BsPersonCircle className={"icon"} />}
        required
      />
      <PrimaryButton
        label={"Accéder à mon espace"}
        Icon={<RiArrowRightSLine className={"icon"} />}
      />
    </LoginFormStyled>
  );
}

export default LoginForm;

const LoginFormStyled = styled.form`
  max-width: 500px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  h1,
  h2 {
    color: ${theme.colors.white};
    text-align: center;
  }
  h1 {
    font-size: ${theme.fonts.P5};
    margin-bottom: 75px;
  }
  h2 {
    font-size: ${theme.fonts.P4};
    margin-bottom: 18px;
  }
  span {
    width: 400px;
    height: 3px;
    position: absolute;
    left: 50%;
    bottom: 225px;
    transform: translateX(-50%);
    background-color: #f56a2c;
    border: 1px;
  }
  .icon {
    width: 17px;
    height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
  }
`;
