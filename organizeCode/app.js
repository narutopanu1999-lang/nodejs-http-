
import http from 'node:http';
import routesHandler from './routes.js'

const server = http.createServer(routesHandler)

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
