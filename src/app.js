import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import router from './router';

const application = express();
application.use(compression());
application.use(morgan('combined'));
application.use(cors());
application.use(bodyParser.json({ type: '*/*' }));
router(application);
const port = process.env.PORT || 3333;
const server = http.createServer(application);
server.listen(port);
console.log(`rmui-uthservice listening on: ${port}`); //eslint-disable-line
