import { BsPersonCircle } from "react-icons/Bs";
import Logo from "../../reusableUI/Logo.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../theme/indEx.jsx";

export default function NavBar() {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleClickDeconnexion = () => {
    navigate("/");
  };
  const handleClickOnLogo = () => {
    navigate(`/order/${username}`);
  };
  

  return (
    <NavBarStyled>
      <Logo className={"logo"} onClick={handleClickOnLogo}/>
      <div className="name-deconnexion-icon-container">
        <div className="name-deconnexion-container">
          <p>
            Hey, <span>{username}</span>
          </p>
          <button onClick={handleClickDeconnexion}>Se déconnecter</button>
        </div>
        <BsPersonCircle className="icon" />
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
background-color: ${theme.colors.background_white};
margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  .name-deconnexion-icon-container {
    width: 50%;
    display: flex;
    justify-content: right;
    align-items: center;
    font-family: "Open Sans", sans-serif;
    .name-deconnexion-container {
        color: ${theme.colors.greyBlue};
        p {
            font-size: 16px;
        }
        span {
            color: ${theme.colors.primary};
      }
      button{
        position: relative;
        background: none;
        border: none;
        color: ${theme.colors.greyBlue};
        cursor: pointer;
        &:hover{
            &::after{
                position: absolute;
                content: "";
                width: 100%;
                height: 1px;
                background-color:${theme.colors.greyBlue};
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
            }

        }
      }
    }
    .icon {
      width: 36px;
      height: 36px;
      color: ${theme.colors.greyBlue};
      margin-left: 10px;
    }
  }
`;
