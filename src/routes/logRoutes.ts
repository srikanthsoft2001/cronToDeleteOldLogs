import { Router } from 'express';
import { LogController } from '../controllers/LogController';

const router = Router();

router.get('/logs', LogController.getLogs);
router.post('/logs', LogController.createLogs);

export default router;
