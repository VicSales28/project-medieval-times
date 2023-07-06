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

  it('Será validado que não é possível cadastrar um produto sem informar um "name"', async function () {
    const httpResponse = await chai.request(app).post('/products').send({
      price: 'price',
    });
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body.message).to.be.deep.equal('"name" is required');
  })

  it('Será validado que não é possível cadastrar um produto sem informar um "price"', async function () {
    const httpResponse = await chai.request(app).post('/products').send({
      name: 'Alabarda',
    });
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body.message).to.be.deep.equal('"price" is required');
  })

  it('Será validado que não é possível cadastrar um produto se "name" não for uma string', async function () {
    const httpResponse = await chai.request(app).post('/products').send({
      name: 1,
      price: 'price',
    });
    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body.message).to.be.deep.equal('"name" must be a string');
  })

  it('Será validado que não é possível cadastrar um produto se "price" não for uma string', async function () {
    const httpResponse = await chai.request(app).post('/products').send({
      name: 'Alabarda',
      price: 1,
    });
    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body.message).to.be.deep.equal('"price" must be a string');
  })

  it('Será validado que não é possível cadastrar um produto se "name" tiver menos de 3 caracteres', async function () {
    const httpResponse = await chai.request(app).post('/products').send({
      name: 'Al',
      price: '10 peças de prata',
    });
    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body.message).to.be.deep.equal('"name" length must be at least 3 characters long');
  })

  it('Será validado que não é possível cadastrar um produto se "price" tiver menos de 3 caracteres', async function () {
    const httpResponse = await chai.request(app).post('/products').send({
      name: 'Alabarda',
      price: 'um',
    });
    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body.message).to.be.deep.equal('"price" length must be at least 3 characters long');
  })
});
