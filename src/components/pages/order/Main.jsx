import { styled } from "styled-components";


export default function Main() {
  return (
    <MainStyled></MainStyled>
  )
}
const MainStyled = styled.div`
height: 100%;
max-width: 1400px;
height: calc(100% - 100px);
background-color: #F5F5F7;
margin: 0 auto;
box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
border-radius: 0px 0px 15px 15px;
  
`;