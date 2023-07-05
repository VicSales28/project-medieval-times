import { Request, Response } from 'express';

import { ProductWithoutOrderId } from '../types/Product';

import productsService from '../services/products.service';

async function create(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;
  const newProduct: ProductWithoutOrderId = await productsService.create({ name, price, orderId });
  return res.status(201).json(newProduct);
}

export default {
  create,
};