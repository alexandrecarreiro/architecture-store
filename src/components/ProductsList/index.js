import styled from "styled-components";
import ProductCard from "components/shared/ProductCard";

const Area = styled.div`
  display: grid;
  flex: 3;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 15px;
  margin-left: 7.5px;
  margin-right: 7.5px;
  margin-top: 15px;
  padding: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function ProductsList() {
  return (
    <Area>
      <ProductCard />
    </Area>
  );
}

export default ProductsList;
