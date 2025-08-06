import styled from "styled-components";

const ProductCard = styled.div`
  width: 223px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 12px;
  margin: 0 16px;
  padding: 12px 12px;
  border-radius: 16px;
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: 0.2s all;

  &:hover {
    scale: 1.05;
    cursor: pointer;
  }

  div p {
    margin: 3px 0;
  }

  div p:first-child {
    font-weight: bold;
  }
`;

const ProductItem = ({ imgSrc, prodName, price }) => {
  return (
    <ProductCard>
      <img src={imgSrc} alt={prodName} />
      <div>
        <p>{prodName}</p>
        <p>{price}</p>
      </div>
    </ProductCard>
  );
};

export default ProductItem;
