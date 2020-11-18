import * as fs from 'fs';
import path from 'path';

let publicKey = '';

function init() {
  try {
    publicKey = fs.readFileSync(path.resolve('./cert/rocklab_rsa.pem'), { encoding: 'utf8' });
  } catch (ex) {
    // eslint-disable-next-line no-console
    console.error('Cert: public key not found');
  }
}

function getPublicKey() {
  return publicKey;
}

export default {
  init,
  getPublicKey,
}
