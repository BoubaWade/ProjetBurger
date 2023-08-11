import { styled } from "styled-components";

export default function PanelButton({ Icon, label, className }) {
  return (
    <PanelButtonStyled className={className}>
      {Icon && Icon}
      <span>{label && label}</span>
    </PanelButtonStyled>
  );
}
const PanelButtonStyled = styled.button`
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
    font-size: 14px;
  }
`;
