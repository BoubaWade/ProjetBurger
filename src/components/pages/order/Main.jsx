import { useState } from "react";
import { styled } from "styled-components";
import { fakeMenu1, fakeMenu2 } from "../../../fakeData/fakeMenu";
import { theme } from "../../../theme/indEx";
import PrimaryButton from "../../reusableUI/PrimaryButton.jsx";
import {formatPrice} from "../../../utils/maths";
//import replaceFrenchCommaWithDot from "../../../utils/maths"

export default function Main() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MainStyled>
      <ul>
        {menu.map((men) => {
          return (
            <article key={men.id}>
              <img src={men.imageSource} alt="" />
              <div className="description-container">
                <h2>{men.title}</h2>
                <div className="price-button-container">
                  <p>{formatPrice(men.price)}</p>
                  <PrimaryButton className={"reSize"} label={"Ajouter"} />
                </div>
              </div>
            </article>
          );
        })}
      </ul>
    </MainStyled>
  );
}
const MainStyled = styled.div`
  max-width: 1400px;
  height: calc(100% - 100px);
  background-color: #f5f5f7;
  margin: 0 auto;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  overflow-y: auto;
  ul {
    display: grid;
    grid-template-columns: repeat(4, 240px);
    grid-template-rows: 330px;
    padding: 50px 50px 150px;
    grid-row-gap: 60px;
    grid-column-gap: 113px;
    article {
      //width: 240px;
      //height: 330px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px 20px 10px 20px;
      border-radius: ${theme.borderRadius.extraRound};
      box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

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
        h2 {
          height: 50%;
          font-size: 36px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          &:hover{
            width: 190px;
          }
        }
        .price-button-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 50%;
          p {
            width: 50%;
            font-family: Open Sans, sans-serif;
            font-size: 16px;
            color: ${theme.colors.primary};
          }
          .reSize {
            width: 95px;
            height: 38px;
          }
        }
      }
    }
  }
`;
