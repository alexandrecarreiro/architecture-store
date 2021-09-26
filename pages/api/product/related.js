import prisma from "lib/api/prisma";
import reparse from "lib/json/reparse";

export async function getProductRelated({ id, take = 4 }) {
  const { rooms, bathrooms, parkings, squareArea } = reparse(
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

  const related = reparse(
    await prisma.product.findMany({
      take,
      where: {
        OR: [
          { rooms: { in: rooms } },
          { bathrooms: { in: bathrooms } },
          { parkings: { in: parkings } },
          {
            squareArea: {
              lte: squareArea + 30,
              gte: squareArea - 30,
            },
          },
        ],
        NOT: {
          id,
        },
      },
      include: {
        images: {
          take: 1,
        },
      },
    })
  );

  return related;
}

async function productRelated({ method, query: { id, take } }, res) {
  if (method === "GET") {
    if (parseInt(id)) {
      const products = await getProductRelated({ id: parseInt(id, 10), take });

      return res.status(200).json({ products });
    }
    return res.status(404);
  }
}

export default productRelated;
