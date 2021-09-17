import styled from "styled-components";

import Body from "./Body";
import HeadPage from "./HeadPage";

import Header from "components/Header";
import Footer from "components/Footer";

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
