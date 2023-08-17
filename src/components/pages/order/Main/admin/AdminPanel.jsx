import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import TextInput from "../../../../reusableUI/TextInput.jsx";
import { theme } from "../../../../../theme/indEx";
import getTextInputConfig from "./getTextInputConfig";
import ImagePreview from "./ImagePreview";
import SubmitButton from "./SubmitButton";

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

  const textInputs = getTextInputConfig(newProduct, handleChange);

  //Affichages
  return (
    <AdminPanelStyled>
      {isEditTabSelected && <div>AdminPanel EDIT</div>}
      {isAddTabSelected && (
        <form onSubmit={handleSubmit}>
          <ImagePreview newProduct={newProduct} />
          <div className="inputs-container">
            {textInputs.map((input) => {
              return (
                <TextInput
                  key={input.id}
                  value={input.value}
                  name={input.name}
                  className={"input"}
                  placeholder={input.placeholder}
                  Icon={input.Icon}
                  onChange={input.onChange}
                  // {...input}
                />
              );
            })}
            <SubmitButton isSuccess={isSuccess} />
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
        :focus {
          outline: none;
        }
        input {
          background-color: #f5f5f7;
        }
        .icon {
          width: 15px;
          height: 15px;
          margin-right: 13px;
        }
      }
    }
  }
`;
