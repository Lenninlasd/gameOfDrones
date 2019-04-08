/*eslint no-console: ["error", { allow: ["warn", "log"] }] */
const app = require('express')();
const mongoose = require('mongoose');
const config = require('../config');
const bodyParser = require('body-parser');
const gameRouter = require('./Routes/gameRouter');
const cors = require('cors');
app.use(cors());

const port = 3000;
const environment = config.NODE_ENV ? 'mongo' : 'localhost';

mongoose
  .connect(`mongodb://${environment}:27017/express`, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('its working :)');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/Games', gameRouter);

app.listen(port, () => console.log(`Server running... on port: ${port}`));
