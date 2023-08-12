import React from "react";
import { styled } from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import Tab from "../../../../reusableUI/Tab";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
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
        Icon={<AiOutlinePlus className="icon-edit" />}
        label={"Ajouter un produit"}
      />
      <Tab
        Icon={<MdModeEditOutline />}
        label={"Modifier un produit"}
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
`;
