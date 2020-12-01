import config from '../config';
import { getAuthToken } from '../utils/requests';
import { verifyToken } from '../utils/tokens';
import { getPublicKey, getSecret } from '../utils/encrypt';

async function validateAuthToken(req, res, next) {
  const token = getAuthToken(req);

  if (!token) {
    return res.status(403).json({
      error: 'access_denied',
      error_description: 'No authorization header',
    });
  }

  try {
    const secret = getPublicKey() || getSecret();
    const decoded = verifyToken(token, { secret, issuer: config.ISSUER });
    const currentUserId = decoded.sub;

    if (!currentUserId) {
      return res.status(401).json({
        error: 'unauthorized',
        error_description: 'Login required',
      });
    }

    req.currentUserId = currentUserId;
  } catch (ex) {
    return res.status(403).json({
      error: ex.name || 'access_denied',
      error_description: ex.message || 'Invalid access token',
    });
  }

  return next();
}

export default validateAuthToken;
