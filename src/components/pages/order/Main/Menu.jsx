import { useContext, useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { styled } from "styled-components";
import Card from "../../../reusableUI/Card.jsx";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenuAdmin from "./admin/EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient.jsx";

const DEFAULT_IMAGE = "../../../../../public/images/coming-soon.png";

export default function Menu() {
  const { isAdmin, products, handleDeleteProduct } = useContext(OrderContext);

  if (products.length === 0) {
    return isAdmin ? <EmptyMenuAdmin /> : <EmptyMenuClient />;
  }
  return (
    <MenuStyled>
      {products.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
            bottomLeft={formatPrice(price)}
            onDelete={() => handleDeleteProduct(id)}
          />
        );
      })}
    </MenuStyled>
  );
}
const MenuStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
`;
