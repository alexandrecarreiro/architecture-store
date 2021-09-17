import Image from "next/image";
import styled from "styled-components";

import Container from "components/shared/Container";

const Area = styled.div`
  align-self: center;
  background-color: #222222;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 15px;
  padding-top: 15px;
  width: 100%;

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const LogoArea = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const InfoArea = styled.div`
  color: #fff;
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 992px) {
    border-left: 1px solid #fff;
  }

  & > div {
    align-items: center;
    display: flex;
    flex: 1;
    height: 100%;
    padding-left: 15px;

    @media (max-width: 576px) {
      align-self: center;
      padding-top: 5px;
      padding-bottom: 5px;
    }

    & > h4 {
        flex: 1;
        text-align: right;

        @media (max-width: 576px) {
          text-align: center;
        }
      }
    }
  }
`;

function Footer() {
  return (
    <Area>
      <Container>
        <LogoArea>
          <Image
            className="pointer"
            src="/Logo-light.svg"
            alt="Architecture Store"
            height={50}
            width={180}
            layout="fixed"
            objectFit="contain"
          />
        </LogoArea>
        <InfoArea>
          <div>
            <Image
              className="pointer"
              src="/icons/facebook.svg"
              alt="facebook"
              height={24}
              width={40}
              layout="fixed"
              objectFit="contain"
            />
            <Image
              className="pointer"
              src="/icons/instagram.svg"
              alt="instagram"
              height={24}
              width={40}
              layout="fixed"
              objectFit="contain"
            />
            <Image
              className="pointer"
              src="/icons/whatsapp.svg"
              alt="whatsapp"
              height={24}
              width={40}
              layout="fixed"
              objectFit="contain"
            />
          </div>
          <div>
            <h4>Architecture Store, um site desenvolvido em NextJS</h4>
          </div>
        </InfoArea>
      </Container>
    </Area>
  );
}

export default Footer;
