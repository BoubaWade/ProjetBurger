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
    handleClickAddTab,
  } = useContext(OrderContext);

  const handleClickEditTab = () => {
    setIsCollapsed(false);
    setIsAddTabSelected(false);
    setIsEditTabSelected(true);
  };

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const buttonTabs = [
    {
      id: 0,
      onClick: handleClick,
      Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
      className: isCollapsed ? "is-active" : "",
    },
    {
      id: 1,
      onClick: handleClickAddTab,
      Icon: <AiOutlinePlus />,
      label: "Ajouter un produit",
      className: isAddTabSelected ? "is-active" : "",
    },
    {
      id: 2,
      onClick: handleClickEditTab,
      Icon: <MdModeEditOutline />,
      label: "Modifier un produit",
      className: isEditTabSelected ? "is-active" : "",
    },
  ];

  return (
    <AdminTabsStyled>
      {buttonTabs.map((tab) => {
        return (
          <Tab
            key={tab.id}
            onClick={tab.onClick}
            Icon={tab.Icon}
            label={tab.label}
            className={tab.className}
          />
        );
      })}
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
