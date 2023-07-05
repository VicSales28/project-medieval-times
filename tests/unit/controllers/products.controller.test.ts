import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';

import productMock from '../../mocks/product.mock';

import ProductsModel from '../../../src/database/models/product.model';
import ProductsService from '../../../src/services/products.service';
import ProductsController from '../../../src/controllers/products.controller';

chai.use(sinonChai);

describe('Testando a camada controller ./products', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testando a função create', async function () {
    req.body = productMock.createReqBodyMock;
    const productWithoutOrderId = productMock.ProductWithoutOrderIdMock;

    sinon.stub(ProductsService, 'create').resolves(productWithoutOrderId);

    await ProductsController.create(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.be.calledWithExactly(productWithoutOrderId);
  })

  it('Testando a função findAll', async function () {
    const allProducts = productMock.allProductsMock;

    const allProductsFound = allProducts.map((product) => ProductsModel.build(product));

    sinon.stub(ProductsService, 'findAll').resolves(allProductsFound);

    await ProductsController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.be.calledWithExactly(allProductsFound);
  })
});
