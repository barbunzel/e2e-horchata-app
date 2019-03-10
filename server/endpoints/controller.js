const MONGODB_CADENA = 'mongodb://localhost:27017';
const NOMBRE_DB = 'horchata-e2e';

const mongodb = require('mongodb');
const mongo = mongodb.MongoClient;
const ObjectId = mongodb.ObjectID;

module.exports = {
  listarBebidas: async (req, res) => {
    const client = await mongo.connect(MONGODB_CADENA, { useNewUrlParser: true });
    const db = client.db(NOMBRE_DB);
    try {
      const bebidas = await db.collection('bebidas').find().toArray();
      res.send(bebidas);
    } catch (error) {
      res.status(500);
    } finally {
      client.close();
    }
  },
  insertarBebida: async (req, res) => {
    const client = await mongo.connect(MONGODB_CADENA, { useNewUrlParser: true });
    const db = client.db(NOMBRE_DB);
    try {
      const nuevaBebida = req.body.bebida;
      const bebida = await db.collection('bebidas').insertOne(nuevaBebida);
      res.send(bebida.ops[0]);
    } catch (error) {
      res.status(500);
    } finally {
      client.close();
    }
  },
  listarBebida: async (req, res) => {
    const client = await mongo.connect(MONGODB_CADENA, { useNewUrlParser: true });
    const db = client.db(NOMBRE_DB);
    try {
      const bebida = await db.collection('bebidas').findOne({ _id: ObjectId(req.params.id) });
      res.send(bebida);
    } catch (error) {
      res.status(500);
    } finally {
      client.close();
    }
  },
  actualizarBebida: async (req, res) => {
    const client = await mongo.connect(MONGODB_CADENA, { useNewUrlParser: true });
    const db = client.db(NOMBRE_DB);
    try {
      const nuevaBebida = req.body.bebida;
      nuevaBebida._id = ObjectId(nuevaBebida._id);
      await db.collection('bebidas').updateOne({ _id: ObjectId(req.params.id) }, { $set: nuevaBebida });
      const bebida = await db.collection('bebidas').findOne({ _id: ObjectId(req.params.id) });
      res.send(bebida);
    } catch (error) {
      res.status(500);
    } finally {
      client.close();
    }
  },
  borrarBebida: async (req, res) => {
    const client = await mongo.connect(MONGODB_CADENA, { useNewUrlParser: true });
    const db = client.db(NOMBRE_DB);
    try {
      await db.collection('bebidas').deleteOne({ _id: ObjectId(req.params.id) });
      res.send({});
    } catch (error) {
      res.status(500);
    } finally {
      client.close();
    }
  },
};
