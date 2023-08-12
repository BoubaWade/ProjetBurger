import { styled } from "styled-components";

export default function Tab({ Icon, label, onClick, className }) {
  return (
    <TabStyled className={className} onClick={onClick}>
      <div className="icon">{Icon}</div>
      {label && <span className="label">{label}</span>}
    </TabStyled>
  );
}
const TabStyled = styled.button`
  display: inline-block;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #93a2b1;
  background-color: #ffffff;
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: #e4e5e9;
  border-radius: 5px 5px 0 0;
  box-shadow: 0px -6px 8px -2px #0000001a;
  padding: 0 22px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    border-bottom: 1px solid white;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:20px;
  }
  .label {
    font-weight: 500;
    margin-left: 13px;
    font-size: 16px;
  }
  span {
  }
`;
