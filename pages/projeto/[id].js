import styled from "styled-components";
import reparse from "lib/json/reparse";

import { getProduct } from "../api/product";
import { getProductRelated } from "../api/product/related";

import Container from "components/shared/Container";
import Slide from "components/shared/Slide";
import Button from "components/shared/Button";
import Related from "components/shared/Related";

const Area = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 15px;
  }
`;

const ImagesSide = styled.div`
  flex: 1;
`;

const InfoSide = styled.div`
  flex: 1;

  & > div {
    padding: 20px;
  }
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const Number = styled.div`
  color: #000;
  font-size: 16px;
  margin-top: 10px;

  & > span {
    font-size: 12px;
  }
`;

const InfoArea = styled.div`
  display: flex;
  width: 100%;
`;

const Info = styled.div`
  align-items: center;
  border-right: ${(props) => (props.borderRight ? "1px solid #E1E1E1" : null)};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const Hr = styled.hr`
  background-color: #e1e1e1;
  border: 0px;
  height: 1px;
`;

const PlantTitle = styled.h1`
  padding: 15px;
  text-align: center;
  width: 100%;
`;

const Plant = styled.img`
  width: 100%;
`;

function Projeto({ product, related }) {
  return (
    <Container flexDirection="column">
      <Area>
        <ImagesSide>
          <Slide
            images={
              product?.images || ["https://via.placeholder.com/1920x1080"]
            }
          />
        </ImagesSide>
        <InfoSide>
          <div>
            <h1>{product?.title || ""}</h1>
            <Hr />
            <InfoArea>
              <Info borderRight>
                <Icon src="/icons/bed.png" />
                <Number>{product?.rooms || "0"}</Number>
              </Info>
              <Info borderRight>
                <Icon src="/icons/toilet.png" />
                <Number>{product?.bathrooms || "0"}</Number>
              </Info>
              <Info borderRight>
                <Icon src="/icons/garage.png" />
                <Number>{product?.parkings || "0"}</Number>
              </Info>
              <Info>
                <Icon src="/icons/square-area.png" />
                <Number>
                  {product?.squareArea || "0"}
                  <span>m²</span>
                </Number>
              </Info>
            </InfoArea>
            <p>{product?.description || ""}</p>
            <h1>
              {parseFloat(product?.price).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              }) || ""}
            </h1>
            <Button width="100%" style={{ marginTop: 15 }}>
              <h3>Comprar</h3>
            </Button>
          </div>
        </InfoSide>
      </Area>
      {product?.plants?.length > 0 && (
        <PlantTitle>Planta Humanizada</PlantTitle>
      )}
      {product?.plants?.map((index, key) => (
        <Plant
          src={index.url || "https://via.placeholder.com/1920x1080"}
          key={key}
        />
      ))}
      <Related products={related} />
    </Container>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params: { id } }) {
  const product = await getProduct({ id: parseInt(id, 10) });
  const related = await getProductRelated({ id: parseInt(id, 10) });

  return {
    props: {
      product,
      related,
    },
  };
}

export default Projeto;
