import { useRouter } from "next/router";

import Container from "components/shared/Container";
import Sidebar from "components/Sidebar";
import ProductsList from "components/ProductsList";

import { getProducts } from "../api/products";

export async function getServerSideProps({ query }) {
  const { page } = query;
  const products = await getProducts({ page });

  if (page > products.totalPages) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }

  return {
    props: { ...products },
  };
}

function Home({ products }) {
  const router = useRouter();
  return (
    <Container justifyContent="center">
      <Sidebar router={router} />
      <ProductsList products={products} />
    </Container>
  );
}

export default Home;
