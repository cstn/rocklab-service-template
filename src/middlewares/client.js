import { getClientId } from '../utils/requests';

function client(req, res, next) {
  const clientId = getClientId(req);

  if (clientId) {
    req.clientId = clientId;
  }

  next();
}

export default client;
