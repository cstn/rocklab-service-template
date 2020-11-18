import express from 'express';

const router = express.Router();

/**
 * ping service
 *
 * @swagger
 * /internal/ping:
 *   get:
 *     summary: Ping
 *     description: Ping
 *     tags:
 *       - system
 *     produces:
 *       - text/plain
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           type: string
 *           example: pong
 */
router.get('/', (req, res) => {
  res.send('pong');
});

module.exports = router;
