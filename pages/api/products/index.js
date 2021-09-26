import prisma from "lib/api/prisma";
import reparse from "lib/json/reparse";

const paramsDefault = {
  page: 1,
  take: 10,
};

export async function getProducts({
  page = paramsDefault.page,
  take = paramsDefault.take,
} = {}) {
  let countProducts = await prisma.product.count();
  let totalPages = Math.ceil(countProducts / take);

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
