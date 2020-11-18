import { getAuthToken } from '../utils/requests';
import { verifyToken } from '../utils/tokens';

async function validateAuthToken(req, res, next) {
  const token = getAuthToken(req);

  if (!token) {
    return res.status(403).json({
      error: 'access_denied',
      error_description: 'No authorization header',
    });
  }

  try {
    const decoded = verifyToken(token);
    const currentUserId = decoded.sub;

    if (!currentUserId) {
      return res.status(401).json({
        error: 'unauthorized',
        error_description: 'login required',
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
