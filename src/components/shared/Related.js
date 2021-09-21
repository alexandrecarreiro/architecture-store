import styled from "styled-components";

import ProductCard from "./ProductCard";

const Title = styled.h1`
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: center;
  width: 100%;
`;

const Area = styled.div`
  align-self: center;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 15px;
  width: 95%;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Msg = styled.h3`
  text-align: center;
  width: 100%;
`;

function Related({ products }) {
  return (
    <>
      <Title>Relacionados</Title>
      <Area>
        {products?.map((index, key) => (
          <ProductCard {...index} key={key} />
        ))}
      </Area>
      {products.length === 0 && (
        <Msg>Infelizmente não temos nenhum produto relacionado.</Msg>
      )}
    </>
  );
}

export default Related;
