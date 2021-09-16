import styled from "styled-components";

import Body from "./Body";
import HeadPage from "./HeadPage";

import Header from "components/Header";
import Footer from "components/Footer";

const Content = styled.div`
  display: flex;
  justify-content: center;
  min-height: 500px;
  width: 100%;

  @media (min-width: 576px) {
    min-height: 250px;
  }

  @media (min-width: 768px) {
    min-height: 350px;
  }

  @media (min-width: 992px) {
    min-height: 450px;
  }

  @media (min-width: 1200px) {
    min-height: 550px;
  }

  @media (min-width: 1400px) {
    min-height: 650px;
  }

  @media (min-width: 1600px) {
    min-height: 750px;
  }

  @media (min-width: 1920px) {
    min-height: 850px;
  }
`;

function Layout({ children }) {
  return (
    <Body>
      <HeadPage />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Body>
  );
}

export default Layout;
