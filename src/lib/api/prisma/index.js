import { PrismaClient } from "@prisma/client";

import objectToFind from "./objectToFind";

class Prisma extends PrismaClient {
  constructor() {
    super();
    this.product.findByObject = this.#findProductByObject;
  }

  async #findProductByObject({ take, skip, filter, include }) {
    return await this.findMany({
      where: await objectToFind(filter),
      skip,
      take,
      include,
    });
  }
}

export default new Prisma();
