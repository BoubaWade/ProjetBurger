import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import TextInput from "../../../../reusableUI/TextInput.jsx";
import PrimaryButton from "../../../../reusableUI/PrimaryButton.jsx";
import { FaHamburger } from "react-icons/fa";
import { theme } from "../../../../../theme/indEx";
import { BsFillCameraFill } from "react-icons/Bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiCheck } from "react-icons/fi";

const EMPTY_PRODUCT = {
  title: "",
  imageSource: "",
  price: 0,
};

export default function AdminPanel() {
  //States
  const [isSuccess, setIsSuccess] = useState(false);

  //Comportements
  const {
    isAddTabSelected,
    isEditTabSelected,
    handleAddProduct,
    newProduct,
    setNewProduct,
  } = useContext(OrderContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newproductToAdd = {
      id: crypto.randomUUID(),
      ...newProduct,
    };
    handleAddProduct(newproductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    const name = e.target.name;
    setNewProduct({ ...newProduct, [name]: newValue });
  };

  //Affichages
  return (
    <AdminPanelStyled>
      {isEditTabSelected && <div>AdminPanel EDIT</div>}
      {isAddTabSelected && (
        <form onSubmit={handleSubmit}>
          <div className="image-previous-container">
            {newProduct.imageSource ? (
              <img src={newProduct.imageSource} alt={newProduct.title} />
            ) : (
              <span>Aucune image</span>
            )}
          </div>
          <div className="inputs-container">
            <TextInput
              value={newProduct.title}
              name="title"
              className="input"
              placeholder={"Nom du produit (ex: Super Burger)"}
              Icon={<FaHamburger className={"icon"} />}
              onChange={handleChange}
            />
            <TextInput
              value={newProduct.imageSource}
              name="imageSource"
              className="input"
              placeholder={
                "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
              }
              Icon={<BsFillCameraFill className={"icon"} />}
              onChange={handleChange}
            />
            <TextInput
              value={newProduct.price ? newProduct.price : ""}
              name="price"
              className="input"
              placeholder={"Prix"}
              Icon={<MdOutlineEuro className={"icon"} />}
              onChange={handleChange}
            />
            <div className="addButton-iconCheck">
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
            </div>
          </div>
        </form>
      )}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: relative;
  background-color: #ffffff;
  height: 250px;
  box-shadow: 0px -6px 8px -2px #0000001a;
  border-radius: 0px 0px 15px 15px;
  padding-top: 30px;
  padding-left: 70px;
  form {
    width: 70%;
    display: flex;
    .image-previous-container {
      width: 25%;
      height: 130px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #e4e5e9;
      border-radius: ${theme.borderRadius.round};
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        //object-fit: cover;
      }
    }
    .inputs-container {
      width: 75%;
      margin-left: 20px;
      .input {
        background-color: #f5f5f7;
        width: 100%;
        color: ${theme.colors.greyBlue};
        border-radius: ${theme.borderRadius.round};
        padding: 8px 15px 8px 25px;
        margin-bottom: 8px;
        input {
          background-color: #f5f5f7;
        }
        .icon {
          width: 15px;
          height: 15px;
          margin-right: 13px;
        }
      }
      .addButton-iconCheck {
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
      }
    }
  }
`;
