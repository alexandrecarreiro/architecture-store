import styled from "styled-components";
import ProductCard from "components/shared/ProductCard";

const Area = styled.div`
  display: grid;
  flex: 3;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 10px;
  padding: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function ProductsList({ products }) {
  return (
    <Area>
      {products.map((index, key) => (
        <ProductCard {...index} key={key} />
      ))}
    </Area>
  );
}

export default ProductsList;
