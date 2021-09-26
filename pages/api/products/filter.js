import prisma from "lib/api/prisma";
import reparse from "lib/json/reparse";

const paramsDefault = {
  page: 1,
  take: 10,
};

export async function handleProductsFilter({
  page = paramsDefault.page,
  take = paramsDefault.take,
  filter,
} = {}) {
  let countProducts = await prisma.product.count();
  let totalPages = Math.ceil(countProducts / take);

  const manyProducts = reparse(
    await prisma.product.findByObject({
      filter,
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

async function productsFilter(req, res) {
  const {
    method,
    query: { page = paramsDefault.page, take = paramsDefault.take },
    body,
  } = req;

  if (method === "POST") {
    if (parseInt(page, 10) && parseInt(take, 10)) {
      const result = await handleProductsFilter({
        page: parseInt(page, 10),
        take: parseInt(take, 10),
        filter: body,
      });

      return res.status(200).json(result);
    }

    return res.status(404);
  }
}

export default productsFilter;
