import HeadPage from "./HeadPage";
import Header from "../Header";
import Body from "./Body";

function Layout({ children }) {
  return (
    <Body>
      <HeadPage />
      <Header />
      {children}
    </Body>
  );
}

export default Layout;
