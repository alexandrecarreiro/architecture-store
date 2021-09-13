import styled from "styled-components";
import ProductCard from "components/shared/ProductCard";

const Area = styled.div`
  display: grid;
  flex: 3;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }

  padding: 15px;
`;

function ProductsList() {
  return (
    <Area>
      <ProductCard />
    </Area>
  );
}

export default ProductsList;
