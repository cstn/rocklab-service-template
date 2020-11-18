import express from 'express';

const router = express.Router();
const timestamp = new Date();

/**
 * get system health info for monitoring
 *
 * @swagger
 * definitions:
 *   Health:
 *     type: object
 *     properties:
 *       status:
 *         type: string
 *         description: Server status
 *         example: RUNNING
 *
 * /internal/health:
 *   get:
 *     summary: Health status
 *     description: Get system health status
 *     tags:
 *       - system
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/Health"
 *       500:
 *         description: Unhealthy
 *         schema:
 *           $ref: "#/definitions/Health"
 */
router.get('/', async (req, res) => {
  res.json({
    status: 'RUNNING',
    started: timestamp,
  });
});

export default router;
