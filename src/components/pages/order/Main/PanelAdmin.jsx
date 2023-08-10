import React from "react";
import { styled } from "styled-components";
import iconPensil from "../../../../../public/icons/pencilSVG.svg";
import iconAdd from "../../../../../public/icons/addSVG.svg";
import iconArrow from "../../../../../public/icons/arrowCollapSVG.svg";
export default function PanelAdmin() {
  return (
    <PanelAdminStyled>
      <div className="panel-top">
        <button>
          <img src={iconArrow} alt="ouvrir ou fermer panel Admin" />
        </button>
        <button>
          <img src={iconAdd} alt="icon ajouter un produit" />
          Ajouter un produit
        </button>
        <button>
          <img src={iconPensil} alt="icon modifier un produit" />
          Modifier un produit
        </button>
      </div>
      <div className="panel-bottom">panel bottom</div>
    </PanelAdminStyled>
  );
}

const PanelAdminStyled = styled.div`
  width: 95%;
  height: 295px;
  position: absolute;
  right: 2.5vw;
  bottom: 20px;
  .panel-top {
    background-color: red;
    height: 45px;
  }
  .panel-bottom {
    background-color: skyblue;
    height: 250px;
  }
`;
