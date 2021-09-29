import prisma from "lib/api/prisma";
import reparse from "lib/json/reparse";

const paramsDefault = {
  page: 1,
  take: 10,
};

export async function getProductsIds() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
    },
  });

  let ids = products.map((v) => v.id.toString());

  let result = ids.map((v) => ({ params: { id: v } }));

  return result;
}

export async function getProducts({
  page = paramsDefault.page,
  take = paramsDefault.take,
} = {}) {
  let count = await prisma.product.count();
  let totalPages = Math.ceil(count / take);

  const manyProducts = reparse(
    await prisma.product.findMany({
      skip: (page - 1) * take,
      take,
      include: {
        images: {
          take: 1,
        },
      },
    })
  );

  return {
    products: manyProducts,
    totalPages,
    page,
  };
}

async function products(req, res) {
  const {
    method,
    query: { page = paramsDefault.page, take = paramsDefault.take },
  } = req;

  if (method === "GET") {
    if (parseInt(page, 10) && parseInt(take, 10)) {
      const result = await getProducts({
        page: parseInt(page, 10),
        take: parseInt(take, 10),
      });

      return res.status(200).json(result);
    }

    return res.status(404);
  }
}

export default products;
