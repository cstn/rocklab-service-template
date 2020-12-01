import * as fs from 'fs';
import path from 'path';

import logger from './logger';

let publicKey = null;
let jwtSecret = null;

function init({ secret }) {
  // eslint-disable-next-line prefer-destructuring
  publicKey = process.env.publicKey;

  try {
    if (!publicKey) {
      publicKey = fs.readFileSync(path.resolve(__dirname, '../../cert/rocklab_rsa.pem'), {
        encoding: 'utf8',
      });
    }
  } catch (ex) {
    logger.warn('Encrypt: No keys found, using secret');
  }

  jwtSecret = secret;
}

const getPublicKey = () => publicKey;
const getSecret = () => jwtSecret;

export {
  init,
  getPublicKey,
  getSecret,
};
