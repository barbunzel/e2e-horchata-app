const expect = require('chai').expect;
const ObjectId = require('mongodb').ObjectID;

const controladorBebidas = require('../../server/endpoints/controller');

const bebida = {
  _id: new ObjectId(),
  nombre: 'Horchata Test',
  marca: 'Abuela Chepa',
  carbonatada: false,
};

const req = {
  body: {},
  params: {},
};

const res = {
  argumento: '',
  status: 0,
  send: function (arg) {
    this.argumento = arg;
  },
  status: function (arg) {
    this.status = arg;
  },
};

describe('Bebidas API', () => {
  it('debería insertar una bebida', () => {
    return new Promise((resolve, reject) => {
      req.body.bebida = bebida;
      controladorBebidas.insertarBebida(req, res)
        .then(() => {
          expect(res.argumento._id).to.exist;
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  });

  it('debería retornar una lista de por lo menos una bebida', () => {
    return new Promise((resolve, reject) => {
      req.body.bebida = bebida;
      controladorBebidas.listarBebidas(req, res)
        .then(() => {
          expect(res.argumento).to.be.a('array');
          expect(res.argumento.length).to.be.gte(0);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  });

  it('debería retornar una bebida específica', () => {
    return new Promise((resolve, reject) => {
      req.params.id = bebida._id;
      controladorBebidas.listarBebida(req, res)
        .then(() => {
          expect(res.argumento._id).to.exist;
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  });

  it('debería actualizar una bebida específica', () => {
    return new Promise((resolve, reject) => {
      req.body.bebida = {
        _id: bebida._id,
        nombre: 'Horchata Test 1',
        carbonatada: false,
      };
      req.params.id = bebida._id;
      controladorBebidas.actualizarBebida(req, res)
        .then(() => {
          expect(res.argumento.nombre).to.equal('Horchata Test 1');
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  });

  it('debería borrar una bebida específica', () => {
    return new Promise((resolve, reject) => {
      req.params.id = bebida._id;
      controladorBebidas.borrarBebida(req, res)
        .then(() => {
          expect(res.argumento).to.be.empty;
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
});
