const createReqBodyMock = {
  "name": "Arco Escudo Invejável",
  "price": "3 Gemas da Noite",
  "orderId": 4
};

const newProductMock = {
  name: 'Arco Escudo Invejável',
  price: '3 Gemas da Noite',
  orderId: 4
};

const newProductCreatedMock = {
  id: 6,
  name: 'Arco Escudo Invejável',
  price: '3 Gemas da Noite',
  orderId: 4
}

const ProductWithoutOrderIdMock = {
  id: 6,
  name: 'Arco Escudo Invejável',
  price: '3 Gemas da Noite',
}

export default {
  createReqBodyMock,
  newProductMock,
  newProductCreatedMock,
  ProductWithoutOrderIdMock,
};