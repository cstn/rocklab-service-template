import Exception from './Exception';

class TokenException extends Exception {
  constructor(message) {
    super(message, 400);
  }
}

export default TokenException;
