import { styled } from "styled-components";
import { theme } from "../../../../theme/indEx";
import { BsPersonCircle } from "react-icons/Bs";
import { useNavigate, useParams } from "react-router-dom";

export default function Profil() {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleClickDeconnexion = () => {
    navigate("/");
  };
  return (
    <ProfilStyled>
      <divc>
        <p>
          Hey, <span>{username}</span>
        </p>
        <button onClick={handleClickDeconnexion}>Se déconnecter</button>
      </divc>
      <BsPersonCircle className="icon" />
    </ProfilStyled>
  );
}

const ProfilStyled = styled.div`
  display: flex;
  color: ${theme.colors.greyBlue};
  margin-left: 50px;
  p {
    font-size: 16px;
  }
  span {
    color: ${theme.colors.primary};
  }
  button {
    position: relative;
    font-size: 12px;
    background: none;
    border: none;
    color: ${theme.colors.greyBlue};
    cursor: pointer;
    &:hover {
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        background-color: ${theme.colors.greyBlue};
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .icon {
    width: 36px;
    height: 36px;
    color: ${theme.colors.greyBlue};
    margin-left: 10px;
  }
`;
