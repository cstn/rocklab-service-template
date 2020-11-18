import debug from 'debug';

const dbg = debug('rocklab-service:server');

const debugRequest = (req, res, next) => {
  dbg(`Request: ${req.url}`);

  next();
};

export default debugRequest;
