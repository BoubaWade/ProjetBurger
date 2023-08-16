import { styled } from "styled-components";
import { theme } from "../../theme/indEx";

export default function TextInput({value, onChange, Icon, className, ...restProps}) {
  return (
    <InputStyled className={className}>
        {Icon && Icon}
        <input
          type="text"
          value={value}
          onChange={onChange}
          {...restProps}
          />  
    </InputStyled>
  )
}

const InputStyled= styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 400px;
    color: ${theme.colors.greyBlue};
    border-radius: ${theme.borderRadius.round};
    padding: 18px 24px;
    margin-bottom: 18px;
    outline: none;
    input {
      width: 100%;
      font-size: 18px;
      border: none;
      &::placeholder {
        color: #d3d3d3;
        font-size: 15px;
      }
    }
  
`;