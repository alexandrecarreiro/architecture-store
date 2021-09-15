import styled from "styled-components";
import Slide from "components/shared/Slide";

const Section = styled.section`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  flex: 1 25%;
`;

const Img = styled.img`
  width: 100%;
`;

const Content = styled.div`
  width: 100%
  height: auto;
  padding: 15px;
`;

const Title = styled.div`
  color: black;
  font-size: 18px;
`;

const Hr = styled.hr`
  background-color: #e1e1e1;
  border: 0px;
  height: 1px;
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

function ProductCard({
  images,
  title,
  rooms,
  bathrooms,
  parkings,
  squareArea,
}) {
  return (
    <Section>
      <Slide images={images} />
      <Content>
        <Title className="text-alata">{title}</Title>
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
      </Content>
    </Section>
  );
}

export default ProductCard;
