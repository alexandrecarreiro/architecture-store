import prisma from "lib/api/prisma";
import reparse from "lib/json/reparse";

export async function getProduct({ id }) {
  const product = reparse(
    await prisma.product.findUnique({
      where: {
        id: id,
      },
      include: {
        images: true,
        plants: true,
      },
    })
  );

  return product;
}

async function product(req, res) {
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    if (parseInt(id)) {
      const product = await getProduct({ id: parseInt(id, 10) });

      return res.status(200).json({ product });
    }
    return res.status(404);
  }
}

export default product;
