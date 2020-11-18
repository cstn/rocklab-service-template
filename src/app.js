import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';

import debugRoute from './middlewares/debug';
import healthRouter from './routes/healthRouter';
import pingRouter from './routes/pingRouter';
import {connect} from './utils/database';
import encrypt from './utils/encrypt';

const app = express();

// middleware
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(debugRoute);

// init
encrypt.init();

// connect to db
connect();

// routes
app.use('/internal/ping', pingRouter);
app.use('/internal/health', healthRouter);

// swagger
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const swaggerSpec = require('./config/swagger');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

app.use((req, res) => {
  res.status(404).send('Not found');
});

module.exports = app;
