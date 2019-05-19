const express = require('express');
const app = express();
const PORT = 3105;
const maxAPI = require('max-api');
const log = (mes) => {
  console.log(mes);
  maxAPI.post(mes);
};

log(__dirname);
app.use(express.static('dist/'));
app.listen(PORT, () => {log('app started')});