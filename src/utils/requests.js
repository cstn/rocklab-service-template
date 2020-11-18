const AUTH_HEADER = 'Authorization';
const AUTH_HEADER_PREFIX = 'Bearer';
const CLIENT_ID_HEADER = 'x-client-id';
const CLIENT_ID_BODY = 'client_id';
const CLIENT_ID_QUERY = 'client_id';

function getClientId(req) {
  const clientHeader = req.header(CLIENT_ID_HEADER);
  const clientBody = req.body ? req.body[CLIENT_ID_BODY] : undefined;
  const clientQuery = req.query ? req.query[CLIENT_ID_QUERY] : undefined;

  return clientBody || clientQuery || clientHeader;
}

function getAuthToken(req) {
  const bearerHeader = req.header(AUTH_HEADER);

  if (!bearerHeader || bearerHeader.indexOf(AUTH_HEADER_PREFIX) === -1) {
    return null;
  }

  return bearerHeader.substring(AUTH_HEADER_PREFIX.length).trim()
}

export {
  getAuthToken,
  getClientId,
};
