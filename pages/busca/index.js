import { useRouter } from "next/router";
import Container from "components/shared/Container";
import Sidebar from "components/Sidebar";
import ProductsList from "components/ProductsList";

import { handleProductsFilter } from "../api/products/filter";

export async function getServerSideProps({ query }) {
  const {
    page,
    take,
    keywords,
    rooms,
    bathrooms,
    parkings,
    minSquareArea,
    maxSquareArea,
  } = query;

  let filter = {
    keywords: query.hasOwnProperty("keywords") ? keywords : null,
    rooms: query.hasOwnProperty("rooms")
      ? Array.isArray(rooms)
        ? rooms.map((v) => parseInt(v))
        : [parseInt(rooms)]
      : null,
    bathrooms: query.hasOwnProperty("bathrooms")
      ? Array.isArray(bathrooms)
        ? bathrooms.map((v) => parseInt(v))
        : [parseInt(bathrooms)]
      : null,
    parkings: query.hasOwnProperty("parkings")
      ? Array.isArray(parkings)
        ? parkings.map((v) => parseInt(v))
        : [parseInt(parkings)]
      : null,
    minSquareArea: query.hasOwnProperty("minSquareArea")
      ? parseInt(minSquareArea)
      : null,
    maxSquareArea: query.hasOwnProperty("maxSquareArea")
      ? parseInt(maxSquareArea)
      : null,
  };

  const { products } = await handleProductsFilter({
    page,
    take,
    filter: Object.fromEntries(
      Object.entries(filter).filter(([, v]) => v !== null)
    ),
  });

  return {
    props: {
      products,
      query,
    },
  };
}

function Busca({
  products,
  query: { rooms, bathrooms, parkings, maxSquareArea, minSquareArea, keywords },
}) {
  const router = useRouter();

  const initialFilter = {
    rooms: rooms
      ? Array.isArray(rooms)
        ? parseInt(rooms)
        : [parseInt(rooms)]
      : [],
    bathrooms: bathrooms
      ? Array.isArray(bathrooms)
        ? parseInt(bathrooms)
        : [parseInt(bathrooms)]
      : [],
    parkings: parkings
      ? Array.isArray(parkings)
        ? parseInt(parkings)
        : [parseInt(parkings)]
      : [],
    keywords: keywords || "",
    minSquareArea: minSquareArea || 0,
    maxSquareArea: maxSquareArea || 0,
  };

  return (
    <Container justifyContent="center">
      <Sidebar router={router} initialFilter={initialFilter} />
      <ProductsList
        products={products}
        title={
          products.length > 0
            ? "Resultado da busca:"
            : "Nenhum resultado encontrado."
        }
      />
    </Container>
  );
}

export default Busca;
