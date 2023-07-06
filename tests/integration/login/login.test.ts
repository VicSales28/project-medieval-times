import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Será validado que não é possível fazer login sem informar um username', async function () {
    const httpResponse = await chai.request(app).post('/login').send({ password: "testando" });
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body.message).to.be.deep.equal('"username" and "password" are required');
  })

  it('Será validado que não é possível fazer login sem informar um password', async function () {
    const httpResponse = await chai.request(app).post('/login').send({ username: "testando" });
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body.message).to.be.deep.equal('"username" and "password" are required');
  })

  it('Será validado que não é possível fazer login com um username inválido', async function () {
    const httpResponse = await chai.request(app).post('/login').send({
      username: 'invalid-username',
      password: 'terrível',
    });
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body.message).to.be.deep.equal('Username or password invalid');
  })

  it('Será validado que não é possível fazer login com uma senha inválida', async function () {
    const httpResponse = await chai.request(app).post('/login').send({
      username: 'Hagar',
      password: 'invalid-password',
    });
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body.message).to.be.deep.equal('Username or password invalid');
  })

  it('Será validado que é possível fazer login com sucesso', async function () {
    const httpResponse = await chai.request(app).post('/login').send({
      username: 'Hagar',
      password: 'terrível',
    });
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
  })
});
