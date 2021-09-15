import Container from "components/shared/Container";
import Sidebar from "components/Sidebar";
import ProductsList from "components/ProductsList";
import reparse from "lib/json/reparse";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const products = await prisma.product.findMany({
    include: {
      images: true,
    },
  });
  return {
    props: {
      products: reparse(products),
    },
  };
}

function Home({ products }) {
  return (
    <Container justifyContent="center">
      <Sidebar />
      <ProductsList products={products} />
    </Container>
  );
}

export default Home;
