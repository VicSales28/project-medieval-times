import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import productMock from '../../mocks/product.mock';
import ProductsModel from '../../../src/database/models/product.model'

chai.use(chaiHttp);

describe('GET /products', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testando a função findAll', async function () {
    const allProducts = productMock.allProductsMock;

    const allProductsFound = allProducts.map((product) => ProductsModel.build(product));

    sinon.stub(ProductsModel, 'findAll').resolves(allProductsFound);

    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(allProducts);
  })
});
