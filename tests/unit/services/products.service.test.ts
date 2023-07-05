import { expect } from 'chai';
import sinon from 'sinon';

import productMock from '../../mocks/product.mock';

import ProductsModel from '../../../src/database/models/product.model';
import ProductsService from '../../../src/services/products.service';

describe('Testando a camada services ./products', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testando a função create', async function () {
    const newProduct = productMock.newProductMock;
    const newProductCreated = productMock.newProductCreatedMock;
    const productWithoutOrderId = productMock.ProductWithoutOrderIdMock;

    const resultModel = ProductsModel.build(newProductCreated);

    sinon.stub(ProductsModel, 'create').resolves(resultModel);

    const resultService = await ProductsService.create(newProduct);

    expect(resultService).to.deep.eq(productWithoutOrderId);
  })
});
