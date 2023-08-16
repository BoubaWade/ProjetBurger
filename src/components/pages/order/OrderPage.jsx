import { styled } from "styled-components";
import Main from "./Main/Main.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import { theme } from "../../../theme/indEx";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx";
import { fakeMenu2 } from "../../../fakeData/fakeMenu.js";

const EMPTY_PRODUCT = {
  title: "",
  imageSource: "",
  price: 0,
};

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAddTabSelected, setIsAddTabSelected] = useState(true);
  const [isEditTabSelected, setIsEditTabSelected] = useState(false);
  const [products, setProducts] = useState(fakeMenu2);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleClickAddTab = () => {
    setIsCollapsed(false);
    setIsAddTabSelected(true);
    setIsEditTabSelected(false);
  };
  const handleAddProduct = (newProduct) => {
    //copier le tableau
    const productsCopy = [...products];
    // manipuler la copie du tableau
    const productsUpdate = [newProduct, ...productsCopy];
    // update du state
    setProducts(productsUpdate);
  };

  const handleDeleteProduct = (idOfProductDeleted) => {
    //copier le tableau
    const productsCopy = [...products];
    // manipuler la copie du tableau
    const productsAfterDelete = productsCopy.filter(
      (product) => product.id !== idOfProductDeleted
    );
    // update du state
    setProducts(productsAfterDelete);
  };

  const orderContextValue = {
    isAdmin,
    setIsAdmin,
    isCollapsed,
    setIsCollapsed,
    isAddTabSelected,
    setIsAddTabSelected,
    isEditTabSelected,
    setIsEditTabSelected,
    products,
    handleAddProduct,
    handleDeleteProduct,
    newProduct,
    setNewProduct,
    handleClickAddTab,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <NavBar />
        <Main />
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  height: 100vh;
  background-color: ${theme.colors.primary};
  padding: 20px 0;
`;
