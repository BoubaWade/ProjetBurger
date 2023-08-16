import { styled } from "styled-components";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <h1>Victime de notre succès ! :D</h1>
      <h2>
        De nouvelles recettes sont en cours de préparation.
        <br />
        <br />À très vite !
      </h2>
    </EmptyMenuClientStyled>
  );
}

const EmptyMenuClientStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  color: #747b91;
  h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  h2 {
    font-weight: 400;
    margin-bottom: 30px;
  }
`;
