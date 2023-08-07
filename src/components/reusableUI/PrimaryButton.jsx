import { styled } from "styled-components";
import { theme } from "../../theme/indEx";


export default function PrimaryButton({label, Icon}) {
  return (
    <PrimaryButtonStyled>
      {label}
      {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const  PrimaryButtonStyled= styled.button`
    width: 400px;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    font-size: 15px;
    border-radius: ${theme.borderRadius.round};
    font-weight: 700;
    line-height: 15px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary_burger};
      border: 1px solid ${theme.colors.primary_burger};
    }
`;