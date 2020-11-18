import Exception from './Exception';

class DuplicateException extends Exception {
  constructor(message, details) {
    super(message, 400, details);
  }
}

export default DuplicateException;
