import React, { useContext } from "react";
import { styled } from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import Tab from "../../../../reusableUI/Tab";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddTabSelected,
    setIsAddTabSelected,
    isEditTabSelected,
    setIsEditTabSelected,
  } = useContext(OrderContext);

  const handleClickAddTab = () => {
    setIsCollapsed(false);
    setIsAddTabSelected(true);
    setIsEditTabSelected(false);
  };
  const handleClickEditTab = () => {
    setIsCollapsed(false);
    setIsAddTabSelected(false);
    setIsEditTabSelected(true);
  };

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <AdminTabsStyled>
      <Tab
        onClick={handleClick}
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        className={isCollapsed ? "is-active" : ""}
      />
      <Tab
        onClick={handleClickAddTab}
        Icon={<AiOutlinePlus />}
        label={"Ajouter un produit"}
        className={isAddTabSelected ? "is-active" : ""}
      />
      <Tab
        onClick={handleClickEditTab}
        Icon={<MdModeEditOutline />}
        label={"Modifier un produit"}
        className={isEditTabSelected ? "is-active" : ""}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  height: 40px;
  margin-left: 5%;
  .is-active {
    background-color: black;
    color: white;
    border: none;
    &:hover {
      border-bottom: none;
    }
  }
  button {
    margin-left: 1px;
  }
`;
