import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import productMock from '../../mocks/product.mock';
import ProductsModel from '../../../src/database/models/product.model'

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testando a função create', async function () {
    const newProduct = productMock.newProductMock;
    const newProductCreated = productMock.newProductCreatedMock;
    const productWithoutOrderId = productMock.ProductWithoutOrderIdMock;

    const resultModel = ProductsModel.build(newProductCreated);

    sinon.stub(ProductsModel, 'create').resolves(resultModel);

    const httpResponse = await chai.request(app).post('/products').send(newProduct);

    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(productWithoutOrderId);
  })
});
