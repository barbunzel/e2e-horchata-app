process.on('uncaughtException', (err) => {
  console.log(err);
});

const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.use('/api/bebidas', require('./endpoints'));
app.listen(3000);
