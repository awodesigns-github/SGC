require('dotenv').config();
const http = require('http');
const app = require('./app/app');
const server = http.createServer(app);
const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Listening at ${PORT}`));
