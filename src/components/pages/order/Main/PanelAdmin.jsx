import React from "react";
import { styled } from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import PanelButton from "../../../reusableUI/PanelButton";

export default function PanelAdmin() {
  return (
    <PanelAdminStyled>
      <div className="panel-top">
        <PanelButton
          className={"chevron-button"}
          Icon={<FiChevronUp className="icon-chevron-down" />}
        />
        <PanelButton
          className={"chevron-button"}
          Icon={<FiChevronDown className="icon-chevron-down" />}
        />

        <PanelButton
          Icon={<AiOutlinePlus className="icon-edit" />}
          label={"Ajouter un produit"}
        />
        <PanelButton
          Icon={<MdModeEditOutline className="icon-edit" />}
          label={"Modifier un produit"}
        />
      </div>
      <div className="panel-bottom">panel bottom</div>
    </PanelAdminStyled>
  );
}

const PanelAdminStyled = styled.div`
  //display: none;
  //width: 95%;
  width: 95vw;
  max-width: 1400px;
  height: 290px;
  position: absolute;
  //position: fixed;
  right: 2.5vw;
  bottom: 20px;
  //left:0;
  //right: 0;
  //bottom: 0;
  .panel-top {
    display: flex;
    height: 40px;
    margin-left: 60px;

    .icon-plus,
    .icon-edit {
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }
    .chevron-button {
      width: 60px;
      position: relative;
      .icon-chevron-up,
      .icon-chevron-down {
        position: absolute;
        width: 20px;
        height: 20px;
      }
      .icon-chevron-up {
        //display: none;
      }
    }
  }
  .panel-bottom {
    background-color: #ffffff;
    height: 250px;
    box-shadow: 0px -6px 8px -2px #0000001a;
    border-radius: 0px 0px 15px 15px;
  }
`;
