import styled from "styled-components";
import reparse from "lib/json/reparse";
import { PrismaClient } from "@prisma/client";

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

function Projeto({
  product: {
    images,
    plants,
    title,
    description,
    price,
    rooms,
    bathrooms,
    parkings,
    squareArea,
  },
  related,
}) {
  return (
    <Container flexDirection="column">
      <Area>
        <ImagesSide>
          <Slide images={images} />
        </ImagesSide>
        <InfoSide>
          <div>
            <h1>{title}</h1>
            <Hr />
            <InfoArea>
              <Info borderRight>
                <Icon src="/icons/bed.png" />
                <Number>{rooms}</Number>
              </Info>
              <Info borderRight>
                <Icon src="/icons/toilet.png" />
                <Number>{bathrooms}</Number>
              </Info>
              <Info borderRight>
                <Icon src="/icons/garage.png" />
                <Number>{parkings}</Number>
              </Info>
              <Info>
                <Icon src="/icons/square-area.png" />
                <Number>
                  {squareArea}
                  <span>m²</span>
                </Number>
              </Info>
            </InfoArea>
            <p>{description}</p>
            <h1>
              {parseFloat(price).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </h1>
            <Button width="100%" style={{ marginTop: 15 }}>
              <h3>Comprar</h3>
            </Button>
          </div>
        </InfoSide>
      </Area>
      {plants.length > 0 && <PlantTitle>Planta Humanizada</PlantTitle>}
      {plants.map((index, key) => (
        <Plant src={index.url} key={key} />
      ))}
      <Related products={related} />
    </Container>
  );
}

const prisma = new PrismaClient();

export async function getServerSideProps({ params: { id } }) {
  const product = reparse(
    await prisma.product.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        images: true,
        plants: true,
      },
    })
  );

  const related = reparse(
    await prisma.product.findMany({
      take: 4,
      where: {
        OR: [
          { rooms: { in: product.rooms } },
          { bathrooms: { in: product.bathrooms } },
          { parkings: { in: product.parkings } },
          {
            squareArea: {
              lte: product.squareArea + 30,
              gte: product.squareArea - 30,
            },
          },
        ],
        NOT: {
          id: product.id,
        },
      },
      include: {
        images: {
          take: 1,
        },
      },
    })
  );

  return {
    props: {
      product,
      related,
    },
  };
}

export default Projeto;
