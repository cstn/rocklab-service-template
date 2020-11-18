import jwt from 'jsonwebtoken';

function verifyToken(token, {secret, issuer}) {
  return jwt.verify(token, secret, {
    issuer,
  });
}

export {
  // eslint-disable-next-line import/prefer-default-export
  verifyToken,
};
