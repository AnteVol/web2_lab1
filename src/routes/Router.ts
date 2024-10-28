import { Router } from 'express';
import { createTicket, getTicketById, totalTicketCount } from '../controllers/tikcetController';
import { TokenValidation } from '../middlewares/Auth';

const router = Router();

router.get('/', totalTicketCount);
router.post('/ticket', TokenValidation, createTicket);
router.get('/ticket/:id', TokenValidation, getTicketById);

export default router;
