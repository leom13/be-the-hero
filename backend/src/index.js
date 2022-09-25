const express = require('express');

const routes = require('./routes');

const app = express();

const cors = require('cors');

/**
 * precisamos informar para o app qie iremos usar o .JSON, usando o código abaixo
*/
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
