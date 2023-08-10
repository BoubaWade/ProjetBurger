import React from "react";
import { styled } from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default function PanelAdmin() {
  return (
    <PanelAdminStyled>
      <div className="panel-top">
        <button className="chevron-button">
          <FiChevronDown className="icon-chevron-down" />
          <FiChevronUp className="icon-chevron-up" />
        </button>
        <button>
          <AiOutlinePlus className="icon-plus" />
          <span>Ajouter un produit</span>
        </button>
        <button>
          <MdModeEditOutline className="icon-edit" />
          <span>Modifier un produit</span>
        </button>
      </div>
      <div className="panel-bottom">panel bottom</div>
    </PanelAdminStyled>
  );
}

const PanelAdminStyled = styled.div`
  //display: none;
  width: 95%;
  height: 290px;
  position: absolute;
  right: 2.5vw;
  bottom: 20px;
  //bottom: 0;
  //transform: translateY(100%);
  .panel-top {
    display: flex;
    height: 40px;
    margin-left: 60px;
    button {
      display: inline-block;
      width: 212px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Open Sans";
      color: #93a2b1;
      background-color: #ffffff;
      border-width: 1px 1px 2px 1px;
      border-style: solid;
      border-color: #e4e5e9;
      border-radius: 5px 5px 0 0;
      box-shadow: 0px -6px 8px -2px #0000001a;
      margin-left: 1px;
      &:hover {
        text-decoration: underline;
      }
      span {
        font-size: 16px;
      }
      .icon-plus,
      .icon-edit {
        width: 18px;
        height: 18px;
        margin-right: 10px;
      }
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
        display: none;
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
