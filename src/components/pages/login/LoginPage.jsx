import LoginForm from "./LoginForm";
import Logo from "../../reusableUI/Logo.jsx";
import burgerBackground from "../../../../public/images/burger-background.jpg"
import { styled } from "styled-components";

function LoginPage() {
    return (
        <LoginPageStyled>    
            <Logo />        
            <LoginForm />
        </LoginPageStyled>
    );
}

export default LoginPage;

const LoginPageStyled = styled.div`
  background: url(${burgerBackground}) rgba(0, 0, 0, 0.7);
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-blend-mode: darken;
`;