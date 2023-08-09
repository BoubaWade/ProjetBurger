import { useState } from "react";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import { styled } from "styled-components";
import Card from "../../reusableUI/Card.jsx";
import { formatPrice } from "../../../utils/maths";

export default function Menu() {
  const [products, setProducts] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {products.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            bottomLeft={formatPrice(price)}
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
