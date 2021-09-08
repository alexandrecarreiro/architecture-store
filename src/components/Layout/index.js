import styled from "styled-components";

import HeadPage from "./HeadPage";
import Header from "../Header";
import Body from "./Body";

const Content = styled.div`
  align-items: center;
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
    </Body>
  );
}

export default Layout;
