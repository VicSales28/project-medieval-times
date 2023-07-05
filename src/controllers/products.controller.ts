import { Request, Response } from 'express';

import { ProductWithoutOrderId } from '../types/Product';

import productService from '../services/products.service';

async function create(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;
  const newProduct: ProductWithoutOrderId = await productService.create({ name, price, orderId });
  return res.status(201).json(newProduct);
}

async function findAll(req: Request, res: Response): Promise<Response> {
  const allProducts = await productService.findAll();
  return res.status(200).json(allProducts);
}

export default {
  create,
  findAll,
};