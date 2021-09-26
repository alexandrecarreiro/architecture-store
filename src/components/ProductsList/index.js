import styled from "styled-components";
import ProductCard from "components/shared/ProductCard";

const Area = styled.div`
  flex: 3;
  flex-direction: column;
  margin-top: 10px;
`;

const Title = styled.h2`
  padding: 10px;
  text-align: left;
  width: 100%;
`;

const List = styled.div`
  display: grid;
  flex: 1;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  padding: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function ProductsList({ products, title }) {
  return (
    <Area>
      {title && <Title>{title}</Title>}
      <List>
        {products.map((index, key) => (
          <ProductCard {...index} key={key} />
        ))}
      </List>
    </Area>
  );
}

export default ProductsList;
