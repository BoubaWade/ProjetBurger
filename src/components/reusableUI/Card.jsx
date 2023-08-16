import { styled } from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { theme } from "../../theme/indEx";
import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import OrderContext from "../../context/OrderContext";

export default function Card({ id, imageSource, title, bottomLeft, onDelete }) {
  const { isAdmin } = useContext(OrderContext);

  //const onDelete = (id) => {
  //  alert("Hello!");
  //  handleDeleteProduct(id);
  //};

  return (
    <CardStyled key={id}>
      {isAdmin && (
        <button className="delete-button" onClick={onDelete}>
          <TiDelete
            className="icon"
            //onClick={(id) => handleDeleteProduct(id)}
          />
        </button>
      )}
      <img src={imageSource} alt={title} />
      <div className="description-container">
        <h2 className="description-top">{title}</h2>
        <div className="description-bottom">
          <p className="bottom-left">{bottomLeft}</p>
          <PrimaryButton className={"bottom-right"} label={"Ajouter"} />
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  position: relative;
  width: 240px;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 10px 20px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  &:hover {
    transform: scale(1.05);
    transition: 0.2s ease;
  }
  .delete-button {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: transparent;
    top: 15px;
    right: 15px;
    border: none;
    cursor: pointer;
    .icon {
      width: 100%;
      height: 100%;
      color: ${theme.colors.primary};
      &:hover {
        color: #e25549;
      }
      &:active {
        color: ${theme.colors.primary};
      }
    }
  }
  img {
    width: 200px;
    height: 145px;
    object-fit: contain;
    margin-bottom: 20px;
  }
  .description-container {
    width: 190px;
    height: 105px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    .description-top {
      height: 50%;
      font-size: 36px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      &:hover {
        width: 190px;
      }
    }
    .description-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50%;
      .bottom-left {
        width: 50%;
        font-family: Open Sans, sans-serif;
        font-size: 16px;
        color: ${theme.colors.primary};
      }
      .bottom-right {
        width: 95px;
        height: 38px;
        font-size:13px;
        &:active {
          background-color: ${theme.colors.primary};
          color: white;
        }
      }
    }
  }
`;
