import { validationResult } from 'express-validator';

const ERROR = 'invalid_request';

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: ERROR,
      errors: errors.array(),
    });
  }

  return next();
};

export default validate;
