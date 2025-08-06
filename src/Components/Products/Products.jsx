import styled from "styled-components";
import ProductItems from "./ProductItems";
import ProductItem from "./ProductItem";
import { useRef } from "react";

const ProductsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 12px;
  min-height: 87vh;
  box-sizing: border-box;
  overflow: hidden;

  .heading {
    font-size: 32px;
    line-height: 35px;
    font-weight: bold;
    color: #0d1a1a;
    text-align: center;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 28px;
      line-height: 32px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 28px;
    }
  }

  #buy {
    width: 94px;
    height: 40px;
    margin: 12px 0;
    padding: 0 16px;
    background-color: #4ae3cf;
    border-radius: 12px;
    border: none;
    color: #0d1a1a;
    line-height: 21px;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: 0.2s all;

    &:hover {
      background-color: #3dbbaa;
    }

    @media (max-width: 480px) {
      width: 100%;
      max-width: 200px;
    }
  }
`;

const ProductsList = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 16px;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    gap: 16px;
  }

  @media (max-width: 768px) {
    gap: 12px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 16px;
    padding: 16px 8px;
    justify-content: flex-start;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ProductItemWrapper = styled.div`
  @media (max-width: 480px) {
    scroll-snap-align: start;
    flex: 0 0 auto;
    width: 80%;
    max-width: 300px;
    padding: 8px;
  }
`;

const ScrollButtons = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;
    width: 100%;

    button {
      background: #4ae3cf;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.2s all;

      &:hover {
        background-color: #3dbbaa;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`;

const Products = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <ProductsSection>
      <p className="heading">Discover Our Latest Collection</p>
      <ProductsList ref={scrollRef}>
        {ProductItems.map((item) => (
          <ProductItemWrapper key={item.id}>
            <ProductItem
              imgSrc={item.imgSrc}
              prodName={item.name}
              price={item.price}
            />
          </ProductItemWrapper>
        ))}
      </ProductsList>
      <ScrollButtons>
        <button onClick={scrollLeft} aria-label="Scroll left">
          &larr;
        </button>
        <button onClick={scrollRight} aria-label="Scroll right">
          &rarr;
        </button>
      </ScrollButtons>
      <button id="buy">Buy Now</button>
    </ProductsSection>
  );
};

export default Products;
