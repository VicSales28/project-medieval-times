import { ProductWithoutOrderId } from '../types/Product';

import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

async function create(newProduct: ProductInputtableTypes): Promise<ProductWithoutOrderId> {
  const result = await ProductModel.create(newProduct);
  const { id, name, price } = result.dataValues;
  return { id, name, price };
}

export default {
  create,
};