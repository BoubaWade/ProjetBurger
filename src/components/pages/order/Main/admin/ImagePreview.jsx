import { styled } from "styled-components";
import { theme } from "../../../../../theme/indEx";

export default function ImagePreview({newProduct}) {
  return (
    <ImagePreviewStyled>
      {newProduct.imageSource ? (
        <img src={newProduct.imageSource} alt={newProduct.title} />
      ) : (
        <span>Aucune image</span>
      )}
    </ImagePreviewStyled>
  );
}

const  ImagePreviewStyled= styled.div`
      width: 25%;
      height: 130px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #e4e5e9;
      border-radius: ${theme.borderRadius.round};
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
`;