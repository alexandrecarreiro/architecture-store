import Container from "components/shared/Container";
import Sidebar from "components/Sidebar";
import ProductsList from "components/ProductsList";

function Home() {
  return (
    <Container justifyContent="center">
      <Sidebar />
      <ProductsList />
    </Container>
  );
}

export default Home;
