const http = require('http');
const express = require('express');
const cors = require('cors');

const itemsRouter = require('./routes/items');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/items', itemsRouter);

app.use('/', function(req, res) {
  res.send('Welcome to Todo API');
});

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
