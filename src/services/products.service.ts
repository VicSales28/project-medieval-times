import { ProductWithoutOrderId } from '../types/Product';

import ProductModel,
{
  ProductInputtableTypes,
  ProductSequelizeModel,
} from '../database/models/product.model';

async function create(newProduct: ProductInputtableTypes): Promise<ProductWithoutOrderId> {
  const result = await ProductModel.create(newProduct);
  // console.log(result);
  const { id, name, price } = result.dataValues;
  return { id, name, price };
}

async function findAll(): Promise<ProductSequelizeModel[]> {
  const allProducts = await ProductModel.findAll();
  // console.log(allProducts);
  return allProducts;
}

export default {
  create,
  findAll,
};