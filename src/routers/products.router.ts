import { Router } from 'express';

import productController from '../controllers/products.controller';

import validateName from '../middlewares/products/name.middleware';
import validatePrice from '../middlewares/products/price.middleware';

const productRouter = Router();

productRouter.post('/products', validateName, validatePrice, productController.create);
productRouter.get('/products', productController.findAll);

export default productRouter;